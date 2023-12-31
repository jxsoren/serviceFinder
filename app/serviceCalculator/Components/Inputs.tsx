"use client";

import React, { useState } from "react";

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
} from "@chakra-ui/react";
import {
  FaRulerCombined,
  FaWeightHanging,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { calculations } from "../calculations/calculations";
import { GroupedServices } from "./Results";
import { ServiceCriteria } from "../calculations/serviceCriterias";

import DimensionInput from "./DimensionInput";

interface InputsProps {
  setSummary: React.Dispatch<React.SetStateAction<GroupedServices>>;
  setHasCalculated: React.Dispatch<React.SetStateAction<boolean>>;
  groupServicesByProvider: (services: ServiceCriteria[]) => GroupedServices;
  hasCalculated: boolean;
}

export const handleDimensionChange = (
  valueAsString: string,
  setValue: React.Dispatch<React.SetStateAction<number>>
) => {
  let value = parseInt(valueAsString);

  if (value < 0 || isNaN(value)) {
    value = 0;
  }

  setValue(value);
};

const Inputs: React.FC<InputsProps> = ({
  setSummary,
  setHasCalculated,
  groupServicesByProvider,
  hasCalculated,
}) => {
  const [length, setLength] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [weightUnit, setWeightUnit] = useState<string>("oz");
  const [destination, setDestination] = useState<string>("domestic");

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

    const groupedServices = groupServicesByProvider(calculatedServices);

    setSummary(groupedServices);
    setHasCalculated(true);
  };

  return (
    <VStack
      spacing={4}
      align="stretch"
      maxW="lg"
      mx="auto"
      p={4}
      boxShadow="lg"
      borderRadius="md"
      bg="blue.50"
    >
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
      <Button
        size="lg"
        bg="#1E5DF9"
        color="white"
        onClick={handleSubmit}
        mt={4}
        _hover={{
          bg: "#2dc4d6",
        }}
      >
        Calculate
      </Button>
    </VStack>
  );
};

export default Inputs;
