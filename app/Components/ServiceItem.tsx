import React from "react";

import { Box, Text, Flex, Icon, useColorModeValue } from "@chakra-ui/react";
import {
  FaTruck,
  FaClock,
  FaInfoCircle,
  FaUsps,
  FaUps,
  FaFedex,
  FaDhl,
} from "react-icons/fa";
import { IconType } from "react-icons";

interface ServiceItemProps {
  service: string;
  subService?: string;
  additionalDetails?: { transitTime: string; isGround: boolean };
  provider: string;
}

interface ProviderIcons {
  USPS: IconType;
  UPS: IconType;
  FedEx: IconType;
  DHL: IconType;
  [key: string]: IconType;
}

interface ProviderColors {
  USPS: string;
  UPS: string;
  FedEx: string;
  DHL: string;
  [key: string]: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  service,
  subService,
  additionalDetails,
  provider,
}) => {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textColor = useColorModeValue("gray.800", "whiteAlpha.900");

  const { transitTime, isGround } = additionalDetails || {};

  const providerIcons: ProviderIcons = {
    USPS: FaUsps,
    UPS: FaUps,
    FedEx: FaFedex,
    DHL: FaDhl,
  };

  const providerColors: ProviderColors = {
    USPS: "blue.500",
    UPS: "yellow.500",
    FedEx: "purple.500",
    DHL: "red.500",
  };

  let providerIcon: IconType = providerIcons[provider] || FaInfoCircle;
  let providerColor: string = providerColors[provider] || "gray.500";

  return (
    <Box
      mb={4}
      p={4}
      bg={bgColor}
      border="1px"
      borderColor={borderColor}
      borderRadius="lg"
      boxShadow="sm"
      _hover={{ boxShadow: "md", transform: "scale(1.02)" }}
      transition="all 0.2s ease-in-out"
    >
      <Flex alignItems="center" mb={3}>
        <Icon as={providerIcon} color={providerColor} mr={2} />
        <Text fontSize="lg" fontWeight="semizzbold" color={textColor}>
          {service}
        </Text>
      </Flex>

      {subService && (
        <Flex alignItems="center" mb={3}>
          <Icon as={FaTruck} color="purple.500" mr={2} />
          <Text fontSize="md" color={textColor}>
            {subService}
          </Text>
        </Flex>
      )}

      {additionalDetails && (
        <Flex alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <Icon as={FaClock} color="yellow.500" mr={2} />
            <Text fontSize="sm" fontWeight="semibold" color={textColor}>
              {transitTime}
            </Text>
          </Flex>

          {isGround && (
            <Text fontSize="sm" color="green.500">
              Ground Available
            </Text>
          )}
        </Flex>
      )}
    </Box>
  );
};

export default ServiceItem;
