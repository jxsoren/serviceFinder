"use client";

import React from "react";

import { FaSearch, FaTruck } from "react-icons/fa";
import { HiOutlineIdentification } from "react-icons/hi";

import DimensionInput from "@/app/serviceCalculator/Components/DimensionInput";

import {
  Box,
  Text,
  Center,
  Spinner,
  VStack,
  FormControl,
  FormLabel,
  Select,
  Icon,
  Button,
} from "@chakra-ui/react";

interface ReverseLookupInputsProps {
  setProvider: React.Dispatch<React.SetStateAction<string>>;
  setDomain: React.Dispatch<React.SetStateAction<string>>;
  searchType: string;
  setSearchType: React.Dispatch<React.SetStateAction<string>>;
  fetchServiceData: () => void;
  clearServiceData: () => void;
}

import { handleDimensionChange } from "@/app/serviceCalculator/Components/Inputs";

const ReverseLookupInputs: React.FC<ReverseLookupInputsProps> = ({
  setProvider,
  setDomain,
  searchType,
  setSearchType,
  fetchServiceData,
  clearServiceData,
}) => {
  const handleCarrierChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProvider(e.target.value);
  };

  const handleDomainChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDomain(e.target.value);
  };

  const handleSearchTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchType(e.target.value);
  };

  return (
    <VStack spacing={6} align="stretch" w="md" mx="auto">
      <FormControl id="search-type">
        <FormLabel>
          <Icon as={FaSearch} mr={2} />
          Search Type
        </FormLabel>
        <Select size="lg" value={searchType} onChange={handleSearchTypeChange}>
          <option value="quickSearch">Quick Search</option>
          <option value="apiSearch">API Search</option>
        </Select>
      </FormControl>
      <FormControl id="search-type">
        <FormLabel>
          <Icon as={FaSearch} mr={2} />
          Carrier
        </FormLabel>
        <Select size="lg" bg="blue.100" onChange={handleCarrierChange}>
          <option value="usps">USPS</option>
          <option value="ups">UPS</option>
          <option value="fedex">FedEx</option>
          <option value="dhl">DHL</option>
        </Select>
      </FormControl>

      <FormControl id="service-type">
        <FormLabel>
          <Icon as={FaTruck} mr={2} />
          Domain
        </FormLabel>
        <Select size="lg" bg="blue.100" onChange={handleDomainChange}>
          <option value="domestic">Domestic</option>
          <option value="international">International</option>
        </Select>
      </FormControl>
      <Button
        colorScheme="blue"
        size="lg"
        width="full"
        onClick={fetchServiceData}
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

export default ReverseLookupInputs;
