import React from "react";
import {
  Box,
  Text,
  Heading,
  Flex,
  Icon,
  VStack,
  Badge,
  Spinner,
} from "@chakra-ui/react";
import {
  FaTruck,
  FaUsps,
  FaUps,
  FaFedex,
  FaDhl,
  FaBoxOpen,
} from "react-icons/fa";
import { ServiceData } from "./ServiceLookup";

import {
  providerColors,
  providerBgColors,
  providerIconBgColors,
} from "../../../app/providerColors";

interface ServiceLookupResultsProps {
  data: ServiceData[];
  isLoading: boolean;
  error: string | null;
}

const ServiceLookupResults: React.FC<ServiceLookupResultsProps> = ({
  data,
  isLoading,
  error,
}) => {
  const getCarrierIcon = (carrierCode: string) => {
    switch (carrierCode.toLowerCase()) {
      case "usps":
        return FaUsps;
      case "ups":
        return FaUps;
      case "fedex":
        return FaFedex;
      case "dhl":
        return FaDhl;
      default:
        return FaTruck;
    }
  };

  return (
    <VStack p={4} w="full" maxW="md" mx="auto" spacing={5} align="stretch">
      <Heading size="xl" color={"blue.200"} textAlign="center">
        Service Lookup Results
      </Heading>

      {isLoading && (
        <Flex justify="center">
          <Spinner
            color="blue.500"
            size="xl"
            label="Fetching Service Information..."
          />
        </Flex>
      )}

      {error && (
        <Box textAlign="center" color="red.500">
          {error}
        </Box>
      )}

      {data?.map((service) => (
        <Box
          key={service.service_id}
          bg={providerColors}
          p={5}
          mb={4}
          borderRadius="md"
          borderWidth="1px"
          borderColor={providerBgColors}
          boxShadow="base"
          _hover={{ boxShadow: "lg" }}
          transition="all 0.3s"
        >
          <Flex alignItems="center" justifyContent="space-between" mb={4}>
            <Icon
              as={getCarrierIcon(service.carrier_code)}
              color="blue.500"
              boxSize="6"
            />
            <Flex direction="column" flex="1" ml={4}>
              <Text fontSize="xl" fontWeight="bold" color={"white"}>
                {service.service}
              </Text>
              <Badge colorScheme="blue" alignSelf="flex-start" mt={1}>
                {service.category.toUpperCase()}
              </Badge>
            </Flex>
          </Flex>

          <Flex
            alignItems="center"
            justifyContent="space-between"
            color={"gray.400"}
          >
            <Text fontWeight="medium">
              Service Code: {service.service_code}
            </Text>
            <Text fontWeight="medium">
              Carrier Code: {service.carrier_code}
            </Text>
          </Flex>

          <Flex alignItems="center" mt={3}>
            <Icon as={FaBoxOpen} color="orange.400" mr={2} />
            <Text fontSize="sm" fontWeight="medium">
              Package Types:{" "}
              {service.package_types.map((type) => type.name).join(", ")}
            </Text>
          </Flex>
        </Box>
      ))}
    </VStack>
  );
};

export default ServiceLookupResults;
