"use client";

import {
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  VStack,
  Button,
  Box,
  Select,
  HStack,
  useToast,
  useMediaQuery,
} from "@chakra-ui/react";

import { useState } from "react";
import { calculations } from "../Logic/calculations";
import ServiceItem from "./ServiceItem";

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

const Inputs = () => {
  const toast = useToast();

  const [length, setLength] = useState(15);
  const [width, setWidth] = useState(15);
  const [height, setHeight] = useState(15);
  const [weight, setWeight] = useState(15);
  const [weightUnit, setWeightUnit] = useState("oz");
  const [destination, setDestination] = useState("domestic");
  const [summary, setSummary] = useState<ServiceCriteria[]>([]);

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
  };

  return (
    <VStack spacing={4} align="stretch" maxW={"lg"} mx="auto" p={4}>
      <Text>Destination</Text>
      <Select
        size="lg"
        aria-label="Select Destination"
        maxW={250}
        value={destination}
        onChange={handleDestinationChange}
      >
        <option value="domestic">Domestic</option>
        <option value="international">International</option>
      </Select>
      <Text>Length</Text>
      <NumberInput
        size="lg"
        maxW={250}
        defaultValue={15}
        min={0}
        onChange={handleLengthChange}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Text>Width</Text>
      <NumberInput
        size="lg"
        maxW={250}
        min={0}
        defaultValue={15}
        onChange={handleWidthChange}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Text>Height</Text>
      <NumberInput
        size="lg"
        maxW={250}
        defaultValue={15}
        min={0}
        onChange={handleHeightChange}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Text>Weight</Text>
      <HStack>
        <NumberInput
          size="lg"
          maxW={250}
          defaultValue={15}
          min={0}
          onChange={handleWeightChange}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <Select
          size="lg"
          maxW="100px"
          value={weightUnit}
          onChange={handleWeightUnitChange}
        >
          <option value="lbs">lbs</option>
          <option value="oz">oz</option>
        </Select>
      </HStack>
      <Button size="lg" colorScheme="teal" onClick={handleSubmit} mt={4}>
        Calculate
      </Button>
      {summary && (
        <Box>
          {summary.map((summaryInfo, index) => (
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
