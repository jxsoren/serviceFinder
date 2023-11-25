"use client";

import React, { useEffect, useState } from "react";

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
  Heading,
} from "@chakra-ui/react";

import { SearchIcon, CloseIcon } from "@chakra-ui/icons";

import { calculations, Criteria } from "../logic/calculations";
import ServiceItem from "./ServiceItem";
import {
  FaRulerCombined,
  FaWeightHanging,
  FaMapMarkerAlt,
} from "react-icons/fa";

interface ServiceCriteria {
  provider?: string;
  service: string;
  subService?: string;
  weightLimit?: number;
  maxLength?: number;
  maxWidth?: number;
  maxHeight?: number;
  maxLengthPlusGirth?: number;
  additionalDetails?: { transitTime: string; isGround: boolean };
}

interface GroupedServices {
  [provider: string]: ServiceCriteria[];
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

  const [summary, setSummary] = useState<GroupedServices>({});
  const [filterInput, setFilterInput] = useState<string>("");
  const [filteredSummary, setFilteredSummary] = useState<GroupedServices>({});

  const [hasCalculated, setHasCalculated] = useState<boolean>(false);

  const debouncedFilter = useDebounce(filterInput, 1000);
  const clearFilter = () => setFilterInput("");

  useEffect(() => {
    if (filterInput.length > 0) {
      // Create a new object to hold the filtered groups
      const newFilteredSummary: GroupedServices = Object.keys(summary).reduce(
        (acc, provider) => {
          // Filter the services within each provider group
          const filteredServices = summary[provider].filter(
            (service) =>
              service.service
                .toLowerCase()
                .includes(filterInput.toLowerCase()) ||
              (service.subService &&
                service.subService
                  .toLowerCase()
                  .includes(filterInput.toLowerCase()))
          );

          // Only add the provider group to the accumulator if it has filtered services
          if (filteredServices.length > 0) {
            acc[provider] = filteredServices;
          }

          return acc;
        },
        {} as GroupedServices
      );

      setFilteredSummary(newFilteredSummary);
    } else {
      // If the filter input is empty, set the filtered summary to the full summary
      setFilteredSummary(summary);
    }
  }, [filterInput, summary, debouncedFilter]);

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
    setFilterInput(event.target.value);
  };

  const groupServiceByProvider = (services: Criteria[]) => {
    const groups = services.reduce<GroupedServices>((acc, service) => {
      const provider = service.provider || "Other";

      if (!acc[provider]) {
        acc[provider] = [];
      }

      acc[provider].push(service);
      return acc;
    }, {});

    return groups;
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

    const groupedServices = groupServiceByProvider(calculatedServices);

    setSummary(groupedServices);
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
        <>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.100" />
            </InputLeftElement>
            <Input
              variant="outline"
              placeholder="Search services..."
              value={filterInput}
              onChange={handleSearchChange}
            />
            {filterInput && (
              <InputRightElement>
                <IconButton
                  icon={<CloseIcon />}
                  size="sm"
                  onClick={clearFilter}
                  aria-label="Clear search"
                  color="gray.100"
                />
              </InputRightElement>
            )}
          </InputGroup>
        </>
      )}

      {hasCalculated &&
        Object.entries(filteredSummary).map(([provider, services]) => (
          <Box key={provider}>
            <Heading size="lg" my={4}>
              {provider}
            </Heading>
            {services.map((service, index) => (
              <ServiceItem
                key={index}
                service={service.service}
                subService={service.subService}
                additionalDetails={service.additionalDetails}
              />
            ))}
          </Box>
        ))}
    </VStack>
  );
};

export default Inputs;
