import {
  Box,
  Text,
  Flex,
  Icon,
  useColorModeValue,
  Tooltip,
} from "@chakra-ui/react";
import { FaTruck, FaClock, FaInfoCircle } from "react-icons/fa";

interface ServiceItemProps {
  service: string;
  subService?: string;
  additionalDetails?: { transitTime: string; isGround: boolean };
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  service,
  subService,
  additionalDetails,
}) => {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textColor = useColorModeValue("gray.800", "whiteAlpha.900");

  const { transitTime, isGround } = additionalDetails || {};

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
        <Icon as={FaInfoCircle} color="blue.500" mr={2} />
        <Text fontSize="lg" fontWeight="semibold" color={textColor}>
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
              Transit Time: {transitTime}
            </Text>
          </Flex>

          {isGround && (
            <Tooltip label="Ground shipping available" hasArrow>
              <Text fontSize="sm" color="green.500">
                Ground Available
              </Text>
            </Tooltip>
          )}
        </Flex>
      )}
    </Box>
  );
};

export default ServiceItem;
