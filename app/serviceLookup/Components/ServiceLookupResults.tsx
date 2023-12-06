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
import ServiceItem from "./ServiceItem";

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
    if (!carrierCode) return FaTruck;

    const lowerCaseCode = carrierCode.toLowerCase();

    if (lowerCaseCode.includes("usps")) return FaUsps;
    if (lowerCaseCode.includes("ups")) return FaUps;
    if (lowerCaseCode.includes("fedex")) return FaFedex;
    if (lowerCaseCode.includes("dhl")) return FaDhl;

    return FaTruck;
  };

  const getCarrierColor = (carrierCode: string) => {
    const { USPS, UPS, FedEx, DHL } = providerColors;
    if (!carrierCode) return "gray.500";

    const lowerCaseCode = carrierCode.toLowerCase();

    if (lowerCaseCode.includes("usps")) return USPS;
    if (lowerCaseCode.includes("ups")) return UPS;
    if (lowerCaseCode.includes("fedex")) return FedEx;
    if (lowerCaseCode.includes("dhl")) return DHL;

    return "gray.500";
  };

  const getCarrierBgColor = (carrierCode: string) => {
    const { USPS, UPS, FedEx, DHL } = providerBgColors;
    if (!carrierCode) return "gray.100";

    const lowerCaseCode = carrierCode.toLowerCase();

    if (lowerCaseCode.includes("usps")) return USPS;
    if (lowerCaseCode.includes("ups")) return UPS;
    if (lowerCaseCode.includes("fedex")) return FedEx;
    if (lowerCaseCode.includes("dhl")) return DHL;

    return "gray.100";
  };

  const getCarrierUI = (carrierCode: string) => {
    if (!carrierCode) return "gray.500";

    const lowerCaseCode = carrierCode.toLowerCase();

    if (lowerCaseCode.includes("usps"))
      return {
        icon: FaUsps,
        iconBg: providerBgColors,
        bg: providerBgColors,
        color: providerColors.USPS,
      };
    if (lowerCaseCode.includes("ups"))
      return {
        icon: FaUps,
        iconBg: providerBgColors,
        bg: providerBgColors,
        color: providerColors.UPS,
      };
    if (lowerCaseCode.includes("fedex"))
      return {
        icon: FaFedex,
        iconBg: providerBgColors,
        bg: providerBgColors,
        color: providerColors.FedEx,
      };
    if (lowerCaseCode.includes("dhl"))
      return {
        icon: FaDhl,
        iconBg: providerBgColors,
        bg: providerBgColors,
        color: providerColors.DHL,
      };
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
        <ServiceItem
          key={service.service_id}
          service={service}
          carrierColor={getCarrierColor(service.carrier_code)}
          carrierIcon={getCarrierIcon(service.carrier_code)}
          carrierBgColor={getCarrierBgColor(service.carrier_code)}
        />
      ))}
    </VStack>
  );
};

export default ServiceLookupResults;
