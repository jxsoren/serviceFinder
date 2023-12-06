import React from "react";
import { Box, Text, Flex, Icon, Badge } from "@chakra-ui/react";
import { FaBoxOpen } from "react-icons/fa";
import { HiIdentification } from "react-icons/hi2";
import { IconType } from "react-icons";
import { ServiceData } from "./ServiceLookup";

type ServiceItemProps = {
  service: ServiceData;
  carrierColor: string;
  carrierIcon: IconType;
  carrierBgColor: string;
};

const ServiceItem: React.FC<ServiceItemProps> = ({
  service,
  carrierColor,
  carrierIcon,
  carrierBgColor,
}) => {
  return (
    <Box
      key={service.service_id}
      position="relative"
      mb={4}
      p={4}
      borderRadius="2xl"
      boxShadow="base"
      _hover={{ boxShadow: "md", transform: "scale(1.02)" }}
      transition="all 0.2s ease-in-out"
      bgGradient={`linear(to-br, ${carrierColor}, gray.200)`}
    >
      <Flex alignItems="center" justifyContent="space-between" mb={4}>
        <Icon
          as={carrierIcon}
          color={carrierColor}
          bg={carrierBgColor}
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
  );
};

export default ServiceItem;
