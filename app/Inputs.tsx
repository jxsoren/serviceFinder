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
  Divider,
} from "@chakra-ui/react";

import { useState } from "react";
import { calculations } from "./calculations";

interface ServiceCriteria {
  service: string;
  subService: string;
  weightLimit?: number;
  maxLength?: number;
  maxWidth?: number;
  maxHeight?: number;
  maxLengthPlusGirth?: number;
}

const Inputs = () => {
  const [length, setLength] = useState(15);
  const [width, setWidth] = useState(15);
  const [height, setHeight] = useState(15);
  const [weight, setWeight] = useState(15);
  const [weightUnit, setWeightUnit] = useState("oz");
  const [destination, setDestination] = useState("domestic");
  const [summary, setSummary] = useState<ServiceCriteria[]>([]);

  const handleLengthChange = (value: string) => setLength(parseInt(value));
  const handleWidthChange = (value: string) => setWidth(parseInt(value));
  const handleHeightChange = (value: string) => setHeight(parseInt(value));
  const handleWeightChange = (value: string) => setWeight(parseInt(value));
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
    const weightInPounds =
      weightUnit === "oz" ? Math.round(weight / 16) : weight;
    const calculatedServices = calculations(
      length,
      width,
      height,
      weightInPounds,
      destination
    );

    setSummary(calculatedServices);
  };

  return (
    <VStack>
      <Select
        size="lg"
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

      <Button
        size="md"
        height="48px"
        width="200px"
        border="2px"
        mt={6}
        borderColor="green.500"
        onClick={handleSubmit}
      >
        Calculate
      </Button>

      {summary && (
        <Box mt={4}>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Calculation Result:
          </Text>
          {summary.map((summaryItem, index) => (
            <Box
              key={index}
              mb={6}
              p={4}
              boxShadow="sm"
              borderRadius="md"
              bgColor="gray.50"
            >
              <Box mb={4}>
                <Text fontSize="md" fontWeight="semibold">
                  Service:
                </Text>
                <Text color="teal.500">{summaryItem.service}</Text>
              </Box>
              <Box mb={4}>
                <Text fontSize="md" fontWeight="semibold">
                  Sub Service:
                </Text>
                <Text color="orange.500">{summaryItem.subService}</Text>
              </Box>
              {index < summary.length - 1 && <Divider />}
            </Box>
          ))}
        </Box>
      )}
    </VStack>
  );
};

export default Inputs;
