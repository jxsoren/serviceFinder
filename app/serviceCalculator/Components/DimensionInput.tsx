"use client";

import React from "react";
import { IconType } from "react-icons";

import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  HStack,
  FormControl,
  FormLabel,
  Icon,
} from "@chakra-ui/react";

interface DimensionsInputProps {
  id: string;
  label: string;
  value: number | string;
  onChange: (valueAsString: string, valueAsNumber: number) => void;
  icon: IconType;
  extraInput?: React.ReactNode;
}

const DimensionInput: React.FC<DimensionsInputProps> = ({
  id,
  label,
  value,
  onChange,
  icon,
  extraInput,
}) => (
  <FormControl id={id}>
    <FormLabel>
      <Icon as={icon} mr={2} />
      {label}
    </FormLabel>
    <HStack>
      <NumberInput
        size="lg"
        maxW={250}
        value={value}
        min={0}
        onChange={onChange}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      {extraInput}
    </HStack>
  </FormControl>
);

export default DimensionInput;
