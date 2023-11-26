"use client";
import React, { useState } from "react";

import { VStack, Fade, Text, Box } from "@chakra-ui/react";

import Results, { GroupedServices } from "../Components/Results";
import Inputs from "../Components/Inputs";
import { ServiceCriteria } from "../logic/serviceCriterias";

const ServiceCalculator = () => {
  const [summary, setSummary] = useState<GroupedServices>({});
  const [hasCalculated, setHasCalculated] = useState<boolean>(false);

  const groupServiceByProvider = (services: ServiceCriteria[]) => {
    const groups = services.reduce<GroupedServices>((acc, service) => {
      const provider = service.provider || "Other";

      if (!acc[provider]) {
        acc[provider] = [];
      }

      acc[provider].push(service);
      return acc;
    }, {});

    return groups;
  };

  return (
    <Box maxW="xl" mx="auto" p={4} bg="white" boxShadow="lg" borderRadius="lg">
      <VStack spacing={4} align="stretch" maxW="lg" mx="auto" p={4}>
        <Inputs
          setSummary={setSummary}
          setHasCalculated={setHasCalculated}
          groupServicesByProvider={groupServiceByProvider}
          hasCalculated={hasCalculated}
        />
        {hasCalculated ? (
          <Fade in={hasCalculated}>
            <Results summary={summary} hasCalculated={hasCalculated} />
          </Fade>
        ) : (
          <Text color="gray.500" textAlign="center">
            Enter details and click calculate to see results...
          </Text>
        )}
      </VStack>
    </Box>
  );
};

export default ServiceCalculator;
