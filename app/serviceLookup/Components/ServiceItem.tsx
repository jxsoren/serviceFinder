import React from "react";
import {
  Box,
  Text,
  Flex,
  Icon,
  Badge,
  UnorderedList,
  useBreakpointValue,
  Grid,
} from "@chakra-ui/react";
import { FaBoxOpen } from "react-icons/fa";
import { HiIdentification } from "react-icons/hi2";
import { IconType } from "react-icons";
import { ServiceData } from "./ServiceLookup";

type ServiceItemProps = {
  service: ServiceData;
  carrierColor: string;
  carrierIcon: IconType;
  carrierBgColor: string;
  carrierIconBgColor: string;
};

const ServiceItem: React.FC<ServiceItemProps> = ({
  service,
  carrierColor,
  carrierIcon,
  carrierBgColor,
  carrierIconBgColor,
}) => {
  const textSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });
  const gridTemplateColumns = useBreakpointValue({
    base: "repeat(1, 1fr)",
    md: "repeat(2, 1fr)",
  });

  return (
    <Box
      key={service.service_id}
      position="relative"
      mb={6}
      p={5}
      borderRadius="xl"
      boxShadow="lg"
      _hover={{ boxShadow: "2xl", transform: "scale(1.03)" }}
      transition="all 0.3s ease-in-out"
      bgGradient={`linear(to-br, ${carrierColor}, gray.300)`}
      overflow="hidden"
    >
      <Flex alignItems="center" justifyContent="space-between" mb={5}>
        <Icon
          as={carrierIcon}
          color={carrierColor}
          bg={carrierIconBgColor}
          p={3}
          borderRadius="full"
          boxShadow="md"
          boxSize="50px"
        />
        <Flex direction="column" flex="1" ml={5}>
          <Text fontSize={textSize} fontWeight="bold" color="gray.800">
            {service.service}
          </Text>
          <Badge colorScheme="purple" alignSelf="flex-start" mt={2}>
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
            fontWeight="semibold"
            color={"white"}
            textShadow="1px 1px 2px rgba(0, 0, 0, 0.1)"
          >
            Carrier Code: {service.carrier_code}
          </Text>
        )}
      </Flex>
      <Flex direction="column" mt={3}>
        <Flex alignItems="center">
          <Icon
            as={FaBoxOpen}
            color="orange.400"
            mr={2}
            aria-label="Package icon"
          />
          <Text
            fontSize={textSize}
            fontWeight="semibold"
            color="white"
            textShadow="1px 1px 2px rgba(0, 0, 0, 0.1)"
            ml={2}
          >
            Package Types:
          </Text>
          <Grid templateColumns={gridTemplateColumns} gap={2} mt={2}>
            <UnorderedList>
              {service.package_types.length > 0 ? (
                service.package_types.map((type) => (
                  <Text
                    alignSelf="flex-start"
                    fontSize="xs"
                    mt={2}
                    colorScheme={"gray.200"}
                  >
                    {type.name}
                  </Text>
                ))
              ) : (
                <Text color="gray.500" mt={2}>
                  No package types available
                </Text>
              )}
            </UnorderedList>
          </Grid>
        </Flex>
      </Flex>

      <Flex alignItems="center" mt={3}>
        <Icon as={HiIdentification} color="white.400" mr={2} />
        <Text
          fontSize="md"
          fontWeight="semibold"
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
