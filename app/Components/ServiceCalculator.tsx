"use client";

import { VStack } from "@chakra-ui/react";

import React, { useState } from "react";

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
    <VStack w={"30vw"}>
      <Inputs
        setSummary={setSummary}
        setHasCalculated={setHasCalculated}
        groupServicesByProvider={groupServiceByProvider}
      />
      <Results summary={summary} hasCalculated={hasCalculated} />
    </VStack>
  );
};

export default ServiceCalculator;
