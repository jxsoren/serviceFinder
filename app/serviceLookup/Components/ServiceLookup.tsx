"use client";

import React, { useState } from "react";
import { Box, Text, Center, Spinner } from "@chakra-ui/react";

import ErrorAlert from "./ErrorAlert";

export interface PackageType {
  type: string;
  name: string;
}

export interface ServiceData {
  service_id: number;
  service: string;
  service_code: string;
  carrier_code: string;
  category: string;
  package_types: PackageType[];
}

import ServiceLookupInputs from "./ServiceLookupInputs";
import ServiceLookupResults from "./ServiceLookupResults";

const ServiceLookup = () => {
  const [data, setData] = useState<ServiceData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [displayResults, setDisplayResults] = useState<boolean>(false);

  const [error, setError] = useState<string | null>(null);

  const [searchId, setSearchId] = useState<number>(0);
  const [category, setCategory] = useState<string>("shipping");

  const handleCloseError = () => {
    setError(null);
    setDisplayResults(false);
  };

  const fetchServiceData = async () => {
    setIsLoading(true);

    console.log(`category: ${category}`);
    console.log(`searchId: ${searchId}`);

    const queryParams = new URLSearchParams({
      category: `${category}`,
    });

    try {
      const response = await fetch(`/api/services?${queryParams.toString()}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      const filteredData = json.services.filter(
        (service: any) => service.service_id === searchId
      );

      setData(filteredData);

      if (filteredData.length === 0) {
        setError("No services found. Please verify the service ID.");
        setDisplayResults(false);
      } else {
        setError(null);
        setDisplayResults(true);
      }
    } catch (error: any) {
      setError(error.message);
      setDisplayResults(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box>
      <ServiceLookupInputs
        category={category}
        setCategory={setCategory}
        searchId={searchId}
        setSearchId={setSearchId}
        fetchServiceData={fetchServiceData}
      />
      {isLoading && (
        <Center py={10}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            label="Fetching Service Information..."
          />
        </Center>
      )}
      {displayResults && (
        <ServiceLookupResults data={data} isLoading={isLoading} error={error} />
      )}
      {error && (
        <ErrorAlert
          error={error}
          handleCloseError={handleCloseError}
          displayResults={displayResults}
        />
      )}
    </Box>
  );
};

export default ServiceLookup;
