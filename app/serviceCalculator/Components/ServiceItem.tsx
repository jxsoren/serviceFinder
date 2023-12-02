"use client";

import React from "react";

import { Box, Text, Flex, Icon, HStack } from "@chakra-ui/react";
import {
  FaTruck,
  FaClock,
  FaInfoCircle,
  FaUsps,
  FaUps,
  FaFedex,
  FaDhl,
} from "react-icons/fa";
import { FaRuler } from "react-icons/fa6";
import { IconType } from "react-icons";

import { Dimensions } from "../../logic/calculations/serviceCriterias";

interface ServiceItemProps {
  service: string;
  subService?: string;
  additionalDetails?: { transitTime: string; isGround: boolean };
  provider: string;
  multiSizes?: Dimensions[];
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
  multiSizes,
}) => {
  const textColor = "gray.700";

  const { transitTime, isGround } = additionalDetails || {};

  const providerIcons: ProviderIcons = {
    USPS: FaUsps,
    UPS: FaUps,
    FedEx: FaFedex,
    DHL: FaDhl,
  };

  const providerColors: ProviderColors = {
    USPS: "#004B87",
    UPS: "#FFB500",
    FedEx: "#4D148C",
    DHL: "#D40511",
  };

  const providerBgColors: ProviderColors = {
    USPS: "#004B87",
    UPS: "#FFB500",
    FedEx: "#4D148C",
    DHL: "#D40511",
  };

  const providerIconBgColors: ProviderColors = {
    USPS: "#CCE4F6",
    UPS: "#FFF2D5",
    FedEx: "#E8D3FF",
    DHL: "#FFD3D3",
  };

  const providerLogos: ProviderColors = {
    USPS: "/logos/usps.svg",
    UPS: "/logos/ups.svg",
    FedEx: "/logos/fedex.svg",
    DHL: "/logos/dhl.svg",
  };

  let providerIcon: IconType = providerIcons[provider] || FaInfoCircle;
  let providerColor: string = providerColors[provider] || "gray.500";
  let providerBgColor: string = providerBgColors[provider] || "gray.100";
  let providerIconBgColor: string =
    providerIconBgColors[provider] || "gray.100";
  let providerLogo: string = providerLogos[provider] || "/logos/usps-logo.svg";

  return (
    <Box
      position="relative"
      mb={4}
      p={4}
      borderRadius="lg"
      boxShadow="sm"
      _hover={{ boxShadow: "md", transform: "scale(1.02)" }}
      transition="all 0.2s ease-in-out"
      bgGradient={`linear(to-br, ${providerBgColor}, gray.200)`}
    >
      <HStack>
        {/* <img
          src={providerLogo}
          alt="Provider Logo"
          style={{
            position: "absolute",
            height: "300px",
            width: "300px",
            left: "50px",
            right: "0px",
            bottom: "-2000px",
            top: "0px",
            opacity: 0.5,
            transform: "rotate(0deg)",
          }}
        /> */}
        <Flex alignItems="center" mb={3}>
          <Icon as={FaInfoCircle} color="#FFFFFF" mr={2} boxSize="20px" />
          <Text
            fontSize="lg"
            fontWeight="semibold"
            color={textColor}
            textShadow="1px 1px 2px rgba(0, 0, 0, 0.1)"
          >
            {service}
          </Text>
        </Flex>
        <Icon
          as={providerIcon}
          color={providerColor}
          position="absolute"
          top={2}
          right={2}
          bg={providerIconBgColor}
          p={2}
          borderRadius="full"
          boxShadow="0 2px 4px rgba(0,0,0,0.1)"
          boxSize="40px"
        />
      </HStack>

      {subService && (
        <Flex alignItems="center" mb={3}>
          <Icon as={FaTruck} color="#FFFF" mr={2} boxSize="20px" />
          <Text
            fontSize="md"
            fontWeight="semibold"
            color={textColor}
            textShadow="1px 1px 2px rgba(0, 0, 0, 0.1)"
          >
            {subService}
          </Text>
        </Flex>
      )}

      {additionalDetails && (
        <Flex alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <Icon as={FaClock} color="#FFFF" mr={2} boxSize="20px" />
            <Text
              fontSize="xs"
              fontWeight="semibold"
              color={textColor}
              textShadow="1px 1px 2px rgba(0, 0, 0, 0.1)"
            >
              {transitTime}
            </Text>
          </Flex>

          {isGround && (
            <Text
              fontSize="sm"
              fontWeight="semibold"
              color="green.500"
              textShadow="1px 1px 2px rgba(0, 0, 0, 0.1)"
            >
              Ground Available
            </Text>
          )}
        </Flex>
      )}

      {multiSizes && (
        <Flex alignItems="center" mt={3}>
          <Icon as={FaRuler} color="#FFFF" mr={2} boxSize="20px" />
          <HStack>
            {multiSizes.map((dimension) => (
              <Text
                fontSize="xs"
                fontWeight="semibold"
                color={textColor}
                textShadow="1px 1px 2px rgba(0, 0, 0, 0.1)"
              >
                {dimension.label}
              </Text>
            ))}
          </HStack>
        </Flex>
      )}
    </Box>
  );
};

export default ServiceItem;
