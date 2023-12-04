import React from "react";
import {
  VStack,
  Heading,
  Button,
  Select,
  IconButton,
  useColorModeValue,
  Text,
  FormControl,
  FormLabel,
  Icon,
} from "@chakra-ui/react";
import { HiOutlineIdentification, HiOutlineSearch } from "react-icons/hi";

import { FaSearch, FaTruck } from "react-icons/fa";

import DimensionInput from "@/app/serviceCalculator/Components/DimensionInput";
import { handleDimensionChange } from "@/app/serviceCalculator/Components/Inputs";

interface ServiceLookupInputsProps {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  searchId: number;
  setSearchId: React.Dispatch<React.SetStateAction<number>>;
  fetchServiceData: () => void;
  searchType: string;
  setSearchType: React.Dispatch<React.SetStateAction<string>>;
}

const ServiceLookupInputs: React.FC<ServiceLookupInputsProps> = ({
  category,
  setCategory,
  searchId,
  setSearchId,
  fetchServiceData,
  searchType,
  setSearchType,
}) => {
  const handleInputChange = (value: string) => {
    handleDimensionChange(value, setSearchId);
  };

  const handleSearchTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchType(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const inputBg = useColorModeValue("gray.100", "gray.700");

  return (
    <VStack spacing={6} align="stretch" w="md" mx="auto">
      <FormControl id="search-type">
        <FormLabel>
          <Icon as={FaSearch} mr={2} />
          Search Type
        </FormLabel>
        <Select
          size="lg"
          value={searchType}
          onChange={handleSearchTypeChange}
          bg={inputBg}
        >
          <option value="quickSearch">Quick Search</option>
          <option value="apiSearch">API Search</option>
        </Select>
      </FormControl>

      <FormControl id="service-type">
        <FormLabel>
          <Icon as={FaTruck} mr={2} />
          Service Type
        </FormLabel>
        <Select
          size="lg"
          value={category}
          onChange={handleCategoryChange}
          bg={inputBg}
        >
          <option value="shipping">Shipping</option>
          <option value="ecommerce">Ecommerce</option>
        </Select>
      </FormControl>
      <DimensionInput
        id="serviceId"
        label="Service ID"
        value={searchId}
        onChange={handleInputChange}
        icon={HiOutlineIdentification}
      />
      <Button
        colorScheme="blue"
        onClick={fetchServiceData}
        size="lg"
        width="full"
      >
        Explore
      </Button>
    </VStack>
  );
};

export default ServiceLookupInputs;
