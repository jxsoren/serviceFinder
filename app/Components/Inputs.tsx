"use client";

import React, { useEffect } from "react";

import {
  VStack,
  Button,
  Box,
  Select,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";

import { SearchIcon, CloseIcon } from "@chakra-ui/icons";

import { useState } from "react";
import { calculations } from "../Logic/calculations";
import ServiceItem from "./ServiceItem";
import {
  FaRulerCombined,
  FaWeightHanging,
  FaMapMarkerAlt,
} from "react-icons/fa";

interface ServiceCriteria {
  service: string;
  subService?: string;
  weightLimit?: number;
  maxLength?: number;
  maxWidth?: number;
  maxHeight?: number;
  maxLengthPlusGirth?: number;
  additionalDetails?: { transitTime: string; isGround: boolean };
}

import DimensionInput from "./DimensionInput";

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};

const Inputs = () => {
  const [length, setLength] = useState<number>(15);
  const [width, setWidth] = useState<number>(15);
  const [height, setHeight] = useState<number>(15);
  const [weight, setWeight] = useState<number>(15);
  const [weightUnit, setWeightUnit] = useState<string>("oz");
  const [destination, setDestination] = useState<string>("domestic");
  const [summary, setSummary] = useState<ServiceCriteria[]>([]);

  const [filter, setFilter] = useState<string>("");
  const [filteredSummary, setFilteredSummary] = useState<ServiceCriteria[]>([]);
  const [hasCalculated, setHasCalculated] = useState<boolean>(false);

  const debouncedFilter = useDebounce(filter, 100);
  const clearFilter = () => setFilter("");

  useEffect(() => {
    if (filter.length > 0) {
      const filteredSummary = summary.filter(
        (serviceCriteria) =>
          serviceCriteria.service
            .toLowerCase()
            .includes(filter.toLowerCase()) ||
          (serviceCriteria.subService &&
            serviceCriteria.subService
              .toLowerCase()
              .includes(filter.toLowerCase()))
      );
      setFilteredSummary(filteredSummary);
    } else {
      setFilteredSummary(summary);
    }
  }, [debouncedFilter, summary]);

  const handleDimensionChange = (
    valueAsString: string,
    setValue: React.Dispatch<React.SetStateAction<number>>
  ) => {
    let value = parseInt(valueAsString);

    if (value < 0 || isNaN(value)) {
      value = 0;
    }

    setValue(value);
  };

  const handleLengthChange = (value: string) =>
    handleDimensionChange(value, setLength);
  const handleWidthChange = (value: string) =>
    handleDimensionChange(value, setWidth);
  const handleHeightChange = (value: string) =>
    handleDimensionChange(value, setHeight);
  const handleWeightChange = (value: string) =>
    handleDimensionChange(value, setWeight);

  const handleWeightUnitChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setWeightUnit(event.target.value);
  };
  const handleDestinationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setDestination(event.target.value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const handleSubmit = () => {
    const weightInOunces =
      weightUnit === "lbs" ? Math.round(weight * 16) : weight;
    const calculatedServices = calculations(
      length,
      width,
      height,
      weightInOunces,
      destination
    );

    setSummary(calculatedServices);
    setHasCalculated(true);
  };

  return (
    <VStack spacing={4} align="stretch" maxW={"lg"} mx="auto" p={4}>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem colSpan={2}>
          <FormControl id="destination">
            <FormLabel>
              <Icon as={FaMapMarkerAlt} mr={2} />
              Destination
            </FormLabel>
            <Select
              size="lg"
              aria-label="Select Destination"
              value={destination}
              onChange={handleDestinationChange}
            >
              <option value="domestic">Domestic</option>
              <option value="international">International</option>
            </Select>
          </FormControl>
        </GridItem>

        <DimensionInput
          id="length"
          label="Length (in)"
          value={length}
          onChange={handleLengthChange}
          icon={FaRulerCombined}
        />
        <DimensionInput
          id="width"
          label="Width (in)"
          value={width}
          onChange={handleWidthChange}
          icon={FaRulerCombined}
        />
        <DimensionInput
          id="height"
          label="Height (in)"
          value={height}
          onChange={handleHeightChange}
          icon={FaRulerCombined}
        />
        <DimensionInput
          id="weight"
          label="Weight"
          value={weight}
          onChange={handleWeightChange}
          icon={FaWeightHanging}
          extraInput={
            <Select
              size="lg"
              maxW="100px"
              value={weightUnit}
              onChange={handleWeightUnitChange}
            >
              <option value="lbs">lbs</option>
              <option value="oz">oz</option>
            </Select>
          }
        />
      </Grid>
      <Button size="lg" colorScheme="teal" onClick={handleSubmit} mt={4}>
        Calculate
      </Button>

      {hasCalculated && (
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            variant="outline"
            placeholder="Search services..."
            value={filter}
            onChange={handleSearchChange}
          />
          {filter && (
            <InputRightElement>
              <IconButton
                icon={<CloseIcon />}
                size="sm"
                onClick={clearFilter}
                aria-label="Clear search"
              />
            </InputRightElement>
          )}
        </InputGroup>
      )}

      {summary && (
        <Box>
          {filteredSummary.map((summaryInfo, index) => (
            <ServiceItem
              service={summaryInfo.service}
              subService={summaryInfo.subService}
              additionalDetails={summaryInfo.additionalDetails}
              key={index}
            />
          ))}
        </Box>
      )}
    </VStack>
  );
};

export default Inputs;
