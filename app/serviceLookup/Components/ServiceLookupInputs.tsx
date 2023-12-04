import React from "react";
import {
  Box,
  Heading,
  Stack,
  Center,
  VStack,
  Fade,
  Text,
  Button,
  Input,
  Select,
  useColorModeValue,
} from "@chakra-ui/react";
import { HiOutlineIdentification, HiOutlineSearch } from "react-icons/hi";

import DimensionInput from "@/app/serviceCalculator/Components/DimensionInput";
import { handleDimensionChange } from "@/app/serviceCalculator/Components/Inputs";

interface ServiceLookupInputsProps {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  searchId: number;
  setSearchId: React.Dispatch<React.SetStateAction<number>>;
  fetchServiceData: () => void;
}

const ServiceLookupInputs: React.FC<ServiceLookupInputsProps> = ({
  category,
  setCategory,
  searchId,
  setSearchId,
  fetchServiceData,
}) => {
  const handleInputChange = (value: string) => {
    handleDimensionChange(value, setSearchId);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const inputBg = useColorModeValue("gray.100", "gray.700");

  return (
    <Center>
      <VStack spacing={6} align="stretch" w="full" maxW="md">
        <Heading size="md" textAlign="center">
          Service Lookup
        </Heading>
        <Select
          size="lg"
          value={category}
          onChange={handleCategoryChange}
          icon={<HiOutlineSearch />}
          bg={inputBg}
        >
          <option value="shipping">Shipping</option>
          <option value="ecommerce">Ecommerce</option>
        </Select>
        <DimensionInput
          id="serviceId"
          label="Service ID"
          value={searchId}
          onChange={handleInputChange}
          icon={HiOutlineIdentification}
        />
        <Button
          colorScheme="blue"
          leftIcon={<HiOutlineSearch />}
          onClick={fetchServiceData}
          size="lg"
          boxShadow="sm"
          _hover={{ boxShadow: "md" }}
        >
          Explore
        </Button>
      </VStack>
    </Center>
  );
};

export default ServiceLookupInputs;
