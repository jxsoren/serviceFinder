import { Box, Text, useColorModeValue } from "@chakra-ui/react";

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

  const { transitTime, isGround } = additionalDetails || {};

  const groundText = isGround ? "Ground Is Available" : null;

  return (
    <Box
      mb={4}
      p={4}
      bg={bgColor}
      border="1px"
      borderColor={borderColor}
      borderRadius="md"
      boxShadow="sm"
      _hover={{ boxShadow: "md" }}
    >
      <Text fontSize="md" fontWeight="semibold">
        Service:
      </Text>
      <Text color="blue.500" fontSize="lg">
        {service}
      </Text>

      {subService && (
        <Box mt={3}>
          <Text fontSize="sm" fontWeight="semibold">
            Sub Service:
          </Text>
          <Text color="purple.500" fontSize="md">
            {subService}
          </Text>
        </Box>
      )}

      <Box mt={3} mb={4} p={4} bg={bgColor} border="1px">
        <Text fontSize="sm" fontWeight="semibold">
          Transit Time
        </Text>
        <Text color="yellow.500" fontSize="lg">
          {transitTime}
        </Text>

        {isGround && (
          <Box mt={2}>
            <Text fontSize="sm" fontWeight="semibold" color="green.500">
              {groundText}
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ServiceItem;
