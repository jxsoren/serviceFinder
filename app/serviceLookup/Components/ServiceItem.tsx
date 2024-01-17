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
  VStack,
  HStack,
} from "@chakra-ui/react";
import { FaBoxOpen, FaShippingFast } from "react-icons/fa";
import { HiIdentification } from "react-icons/hi2";
import { MdOutlineLocalShipping } from "react-icons/md";

import { IconType } from "react-icons";
import { ServiceData } from "./ServiceLookup";

type ServiceItemProps = {
  service: ServiceData;
  carrierColor: string;
  carrierIcon: IconType;
  carrierBgColor: string;
  carrierIconBgColor: string;
  source: string;
};

const ServiceItem: React.FC<ServiceItemProps> = ({
  service,
  carrierColor,
  carrierIcon,
  carrierBgColor,
  carrierIconBgColor,
  source,
}) => {
  const headingSize = useBreakpointValue({ base: "md", md: "lg", lg: "xl" });
  const detailSize = useBreakpointValue({ base: "sm", md: "md" });
  const codeSize = useBreakpointValue({ base: "xs", md: "sm" });
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
      bgGradient={`linear(to-br, ${carrierColor}, ${carrierBgColor})`}
      overflow="hidden"
      border="1px solid #E2E8F0"
    >
      <VStack spacing={4} align="stretch">
        <HStack justifyContent="space-between">
          <Icon
            as={carrierIcon}
            color={carrierColor}
            bg={carrierIconBgColor}
            p={2}
            borderRadius="full"
            boxSize="40px"
          />
          <VStack align="flex-start" flex="1">
            <Text fontSize={headingSize} fontWeight="bold" color="white">
              {service.service}
            </Text>
            <Badge colorScheme="purple" alignSelf="flex-start">
              {service.category.toUpperCase()}
            </Badge>
          </VStack>
        </HStack>

        <Flex direction="column">
          {service.service_code && (
            <HStack>
              <Icon
                as={FaShippingFast}
                color="white.400"
                aria-label="Shipping icon"
              />
              <Text fontSize={detailSize} fontWeight="semibold" color="white">
                Service Code: {service.service_code}
              </Text>
            </HStack>
          )}

          {service.carrier_code && (
            <HStack>
              <Icon
                as={MdOutlineLocalShipping}
                color="white.100"
                aria-label="Package icon"
              />
              <Text fontSize={detailSize} fontWeight="semibold" color="white">
                Carrier Code: {service.carrier_code}
              </Text>
            </HStack>
          )}

          {service.package_types[0].name.length > 0 && (
            <VStack align="flex-start" mt={2}>
              <HStack>
                <Icon
                  as={FaBoxOpen}
                  color="orange.400"
                  aria-label="Package icon"
                />
                <Text fontSize={detailSize} fontWeight="semibold" color="white">
                  Package Types:
                </Text>
              </HStack>
              <Box overflowY="auto" maxHeight="200px">
                <Grid templateColumns={gridTemplateColumns} gap={2}>
                  {service.package_types.length > 0 ? (
                    service.package_types.map((type, index) => (
                      <Text
                        key={index}
                        fontSize={codeSize}
                        color="whiteAlpha.800"
                      >
                        {type.name}
                      </Text>
                    ))
                  ) : (
                    <Text fontSize={codeSize} color="whiteAlpha.500">
                      No package types available
                    </Text>
                  )}
                </Grid>
              </Box>
            </VStack>
          )}
        </Flex>

        <HStack>
          <Icon as={HiIdentification} color="white.400" />
          <Text fontSize={detailSize} fontWeight="semibold" color="white">
            Service ID: {service.service_id}
          </Text>
        </HStack>

        {source && (
          <HStack>
            <Icon as={HiIdentification} color="white.400" />
            <Text fontSize={detailSize} fontWeight="semibold" color="white">
              Source: {source}
            </Text>
          </HStack>
        )}
      </VStack>
    </Box>
  );
};

export default ServiceItem;
