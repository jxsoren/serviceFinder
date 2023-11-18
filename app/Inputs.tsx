"use client";

import {
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  VStack,
} from "@chakra-ui/react";

const Inputs = () => {
  return (
    <VStack>
      <Text>Length</Text>
      <NumberInput size="lg" maxW={250} defaultValue={15} min={10}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

      <Text>Height</Text>
      <NumberInput size="lg" maxW={250} defaultValue={15} min={10}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

      <Text>Weight</Text>
      <NumberInput size="lg" maxW={250} defaultValue={15} min={10}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </VStack>
  );
};

export default Inputs;
