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
import { IconType } from "react-icons";

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

interface CarrierUI {
  icon: IconType;
  iconBg: string;
  bg: string;
  color: string;
}

const ServiceLookupResults: React.FC<ServiceLookupResultsProps> = ({
  data,
  isLoading,
  error,
}) => {
  const getCarrierUI = (carrierCode: string) => {
    const defaultUI: CarrierUI = {
      icon: FaTruck,
      iconBg: "gray.100",
      bg: "gray.100",
      color: "gray.500",
    };

    if (!carrierCode) return defaultUI;

    const lowerCaseCode = carrierCode.toLowerCase();

    if (lowerCaseCode.includes("usps"))
      return {
        icon: FaUsps,
        iconBg: providerIconBgColors.USPS,
        bg: providerBgColors.USPS,
        color: providerColors.USPS,
      };
    if (lowerCaseCode.includes("ups"))
      return {
        icon: FaUps,
        iconBg: providerIconBgColors.UPS,
        bg: providerBgColors.UPS,
        color: providerColors.UPS,
      };
    if (lowerCaseCode.includes("fed_"))
      return {
        icon: FaFedex,
        iconBg: providerIconBgColors.FedEx,
        bg: providerBgColors.FedEx,
        color: providerColors.FedEx,
      };
    if (lowerCaseCode.includes("dhl"))
      return {
        icon: FaDhl,
        iconBg: providerIconBgColors.DHL,
        bg: providerBgColors.DHL,
        color: providerColors.DHL,
      };

    return defaultUI;
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
          carrierColor={getCarrierUI(service.carrier_code).color}
          carrierIcon={getCarrierUI(service.carrier_code).icon}
          carrierBgColor={getCarrierUI(service.carrier_code).bg}
          carrierIconBgColor={getCarrierUI(service.carrier_code).iconBg}
        />
      ))}
    </VStack>
  );
};

export default ServiceLookupResults;
