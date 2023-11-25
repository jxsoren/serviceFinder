"use client";

import React, { useState } from "react";

import { GroupedServices } from "../Components/Results";
import Inputs from "../Components/Inputs";
import Results from "../Components/Results";
import { Criteria } from "../logic/calculations";
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
    <>
      <Inputs
        setSummary={setSummary}
        setHasCalculated={setHasCalculated}
        groupServicesByProvider={groupServiceByProvider}
      />
      <Results summary={summary} hasCalculated={hasCalculated} />
    </>
  );
};

export default ServiceCalculator;
