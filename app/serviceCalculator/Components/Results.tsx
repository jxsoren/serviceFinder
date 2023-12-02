"use client";

import React, { useEffect, useState, useCallback, useMemo } from "react";

import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { SearchIcon, CloseIcon } from "@chakra-ui/icons";

import ServiceItem from "./ServiceItem";
import { ServiceCriteria } from "../../logic/calculations/serviceCriterias";

import ProviderTitle from "./ProviderTitle";

export interface GroupedServices {
  [provider: string]: ServiceCriteria[];
}

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};

interface ResultProps {
  summary: GroupedServices;
  hasCalculated: boolean;
}

const Results: React.FC<ResultProps> = ({ summary, hasCalculated }) => {
  const [filterInput, setFilterInput] = useState<string>("");
  const clearFilter = useCallback(() => setFilterInput(""), []);

  const debouncedFilter = useDebounce(filterInput, 1000);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterInput(event.target.value);
  };

  const filterSummary = useMemo(() => {
    if (!debouncedFilter) {
      return summary;
    }

    const lowerCaseFilter = debouncedFilter.toLowerCase();
    return Object.keys(summary).reduce((acc, provider) => {
      const filteredServices = summary[provider].filter(
        (service) =>
          service.service.toLowerCase().includes(lowerCaseFilter) ||
          (service.subService &&
            service.subService.toLowerCase().includes(lowerCaseFilter))
      );

      if (filteredServices.length > 0) {
        acc[provider] = filteredServices;
      }

      return acc;
    }, {} as GroupedServices);
  }, [debouncedFilter, summary]);

  return (
    <Box px={[2, 4, 6]} py={4} maxW="lg" mx="auto">
      {hasCalculated && (
        <InputGroup size="lg" mb={4}>
          <InputLeftElement>
            <SearchIcon color="gray.500" />
          </InputLeftElement>
          <Input
            variant="filled"
            placeholder="Search services..."
            value={filterInput}
            onChange={handleSearchChange}
          />
          {filterInput && (
            <InputRightElement>
              <IconButton
                icon={<CloseIcon />}
                size="sm"
                onClick={clearFilter}
                aria-label="Clear search"
                variant="ghost"
              />
            </InputRightElement>
          )}
        </InputGroup>
      )}

      {hasCalculated &&
        Object.entries(filterSummary).map(([provider, services]) => (
          <Box key={provider} mb={6}>
            <ProviderTitle provider={provider}>{provider}</ProviderTitle>
            {services.map((service, index) => (
              <ServiceItem
                key={index}
                service={service.service}
                subService={service.subService}
                additionalDetails={service.additionalDetails}
                provider={provider}
                multiSizes={service.multiSizes}
              />
            ))}
          </Box>
        ))}
    </Box>
  );
};

export default Results;
