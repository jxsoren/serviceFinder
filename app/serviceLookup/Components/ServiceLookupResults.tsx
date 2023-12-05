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
import { HiIdentification } from "react-icons/hi2";

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
    if (carrierCode == null) return FaTruck;
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

  const getCarrierColor = (carrierCode: string) => {
    if (carrierCode == null) return "gray.500";

    const { USPS, UPS, FedEx, DHL } = providerBgColors;
    switch (carrierCode.toLowerCase()) {
      case "usps":
        return USPS;
      case "ups":
        return UPS;
      case "fedex":
        return FedEx;
      case "dhl":
        return DHL;
      default:
        return "gray.500";
    }
  };

  const getCarrierBgColor = (carrierCode: string) => {
    if (carrierCode == null) return "gray.100";

    const { USPS, UPS, FedEx, DHL } = providerIconBgColors;
    switch (carrierCode.toLowerCase()) {
      case "usps":
        return USPS;
      case "ups":
        return UPS;
      case "fedex":
        return FedEx;
      case "dhl":
        return DHL;
      default:
        return "gray.500";
    }
  };

  return (
    <VStack p={4} w="full" maxW="md" mx="auto" spacing={8} align="stretch">
      <Heading size="xl" color={"black.200"} textAlign="center">
        Service Lookup Results
      </Heading>

      {isLoading && (
        <Flex justify="center">
          <Text
            fontSize="md"
            fontWeight="extrabold"
            color={"white"}
            textShadow="1px 1px 2px rgba(0, 0, 0, 0.1)"
          >
            Results may take up to 20 seconds...
          </Text>
          <Spinner
            color="blue.500"
            size="xl"
            label="Fetching Service Information..."
          />
        </Flex>
      )}

      {error && (
        <Box textAlign="center" color="red.600">
          Error: {error}
        </Box>
      )}

      {data?.map((service) => (
        <Box
          key={service.service_id}
          bg={providerColors}
          position="relative"
          mb={4}
          p={4}
          borderRadius="2xl"
          boxShadow="base"
          _hover={{ boxShadow: "md", transform: "scale(1.02)" }}
          transition="all 0.2s ease-in-out"
          bgGradient={`linear(to-br, ${getCarrierColor(
            service.carrier_code
          )}, gray.200)`}
        >
          <Flex alignItems="center" justifyContent="space-between" mb={4}>
            <Icon
              as={getCarrierIcon(service.carrier_code)}
              color={getCarrierColor(service.carrier_code)}
              bg={getCarrierBgColor(service.carrier_code)}
              top={2}
              p={2}
              borderRadius="full"
              boxShadow="0 2px 4px rgba(0,0,0,0.1)"
              boxSize="40px"
            />
            <Flex direction="column" flex="1" ml={4}>
              <Text fontSize="xl" fontWeight="extrabold" color={"white"}>
                {service.service}
              </Text>
              <Badge colorScheme="blue" alignSelf="flex-start" mt={1}>
                {service.category.toUpperCase()}
              </Badge>
            </Flex>
          </Flex>
          <Flex alignItems="center" mb={3}>
            <Text
              fontSize="md"
              fontWeight="extrabold"
              color={"white"}
              textShadow="1px 1px 2px rgba(0, 0, 0, 0.1)"
            >
              Service Code: {service.service_code}
            </Text>

            {service.carrier_code && (
              <Text
                fontSize="md"
                fontWeight="extrabold"
                color={"white"}
                textShadow="1px 1px 2px rgba(0, 0, 0, 0.1)"
              >
                Carrier Code: {service.carrier_code}
              </Text>
            )}
          </Flex>
          <Flex alignItems="center" mt={3}>
            <Icon as={FaBoxOpen} color="orange.400" mr={2} />
            <Text
              fontSize="md"
              fontWeight="extrabold"
              color={"white"}
              textShadow="1px 1px 2px rgba(0, 0, 0, 0.1)"
            >
              Package Types:
              {service.package_types.map((type) => type.name).join(", ")}
            </Text>
          </Flex>

          <Flex alignItems="center" mt={3}>
            <Icon as={HiIdentification} color="white.400" mr={2} />
            <Text
              fontSize="md"
              fontWeight="extrabold"
              color={"black.100"}
              textShadow="1px 1px 2px rgba(0, 0, 0, 0.1)"
            >
              Service ID: {service.service_id}
            </Text>
          </Flex>
        </Box>
      ))}
    </VStack>
  );
};

export default ServiceLookupResults;
