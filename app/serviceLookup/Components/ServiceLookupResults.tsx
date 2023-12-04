import React from "react";
import {
  Box,
  Text,
  Heading,
  Flex,
  Icon,
  VStack,
  Badge,
} from "@chakra-ui/react";
import {
  FaTruck,
  FaClock,
  FaInfoCircle,
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
    <Box p={4} w="md" mx="auto">
      <Heading mb={4}>Service Lookup Results</Heading>

      {isLoading && <Text>Loading...</Text>}

      {error && <Text color="red.500">{error}</Text>}

      {data?.map((service) => (
        <Box
          key={service.service_id}
          p={4}
          mb={4}
          borderRadius="lg"
          boxShadow="sm"
          _hover={{ boxShadow: "md", transform: "scale(1.02)" }}
          transition="all 0.2s ease-in-out"
          bgGradient="linear(to-r, blue.100, blue.50)"
        >
          <Flex alignItems="center" justifyContent="space-between" mb={3}>
            <Icon
              as={getCarrierIcon(service.carrier_code)}
              color="blue.500"
              boxSize="24px"
            />
            <Icon
              as={getCarrierIcon(service.carrier_code)}
              color={providerColors}
              position="absolute"
              top={2}
              right={2}
              bg={providerIconBgColors}
              p={2}
              borderRadius="full"
              boxShadow="0 2px 4px rgba(0,0,0,0.1)"
              boxSize="40px"
            />
            <Text fontSize="lg" fontWeight="semibold" color="gray.700">
              {service.service}
            </Text>
            <Badge colorScheme="blue">{service.category}</Badge>
          </Flex>

          <Flex
            alignItems="center"
            justifyContent="space-between"
            color="gray.600"
          >
            <Text>Service Code: {service.service_code}</Text>
            <Text>Carrier Code: {service.carrier_code}</Text>
          </Flex>

          <Flex alignItems="center" mt={3}>
            <Icon as={FaBoxOpen} color="orange.400" mr={2} />
            <Text fontSize="sm">
              Package Types:
              {service.package_types.map((type) => type.name).join(", ")}
            </Text>
          </Flex>
        </Box>
      ))}
    </Box>
  );
};

export default ServiceLookupResults;
