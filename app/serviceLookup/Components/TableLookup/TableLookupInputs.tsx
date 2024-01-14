"use client";

import React from "react";

import { FaSearch, FaTruck } from "react-icons/fa";
import { HiOutlineIdentification } from "react-icons/hi";

import DimensionInput from "@/app/serviceCalculator/Components/DimensionInput";

import {
  VStack,
  Button,
  FormControl,
  FormLabel,
  Icon,
  Select,
} from "@chakra-ui/react";

interface ServiceLookupInputsProps {
  searchId: string;
  setSearchId: React.Dispatch<React.SetStateAction<number>>;
  searchCSV: (searchId: string, searchName: string) => void;
  clearServiceData: () => void;
}

import { handleDimensionChange } from "@/app/serviceCalculator/Components/Inputs";

const TableLookupInputs: React.FC<ServiceLookupInputsProps> = ({
  searchId,
  setSearchId,
  searchCSV,
  clearServiceData,
}) => {
  const handleInputChange = (value: string) => {
    handleDimensionChange(value, setSearchId);
  };

  return (
    <VStack spacing={6} align="stretch" w="md" mx="auto">
      <DimensionInput
        id="serviceId"
        label="Service ID"
        value={searchId}
        onChange={handleInputChange}
        icon={HiOutlineIdentification}
      />
      <Button
        colorScheme="blue"
        size="lg"
        width="full"
        onClick={() => searchCSV(searchId, "")}
      >
        Explore
      </Button>
      <Button
        colorScheme="gray"
        size="lg"
        width="full"
        onClick={clearServiceData}
      >
        Clear
      </Button>
    </VStack>
  );
};

export default TableLookupInputs;
