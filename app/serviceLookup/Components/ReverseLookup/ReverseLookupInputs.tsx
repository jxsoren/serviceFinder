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
  provider: string;
  setProvider: React.Dispatch<React.SetStateAction<string>>;
  domain: string;
  setDomain: React.Dispatch<React.SetStateAction<string>>;
  fetchServiceData: () => void;
}

const ReverseLookupInputs: React.FC<ReverseLookupInputsProps> = ({
  provider,
  setProvider,
  domain,
  setDomain,
  fetchServiceData,
}) => {
  return (
    <VStack spacing={6} align="stretch" w="md" mx="auto">
      <FormControl id="search-type">
        <FormLabel>
          <Icon as={FaSearch} mr={2} />
          Carrier
        </FormLabel>
        <Select size="lg" bg="blue.100">
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
        <Select size="lg" bg="blue.100">
          <option value="domestic">Domestic</option>
          <option value="international">International</option>
        </Select>
      </FormControl>

      <Button colorScheme="blue" size="lg" width="full">
        Explore
      </Button>
    </VStack>
  );
};

export default ReverseLookupInputs;
