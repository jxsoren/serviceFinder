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

import ecommerceCodes from "../json/ecommerceCodes.json";
import shippingCodes from "../json/shippingCodes.json";

const ecommerceCodesData: { services: ServiceData[] } = ecommerceCodes as any;
const shippingCodesData: { services: ServiceData[] } = shippingCodes as any;

const ServiceLookup = () => {
  const [searchType, setSearchType] = useState<string>("quickSearch");
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

  const quickSearch = () => {
    const quickSearchData =
      category === "shipping" ? shippingCodesData : ecommerceCodesData;

    setIsLoading(true);

    const filteredData = quickSearchData.services.filter(
      (service: ServiceData) => service.service_id === searchId
    );

    setData(filteredData);
    setIsLoading(false);
    setDisplayResults(filteredData.length > 0);
    setError(
      filteredData.length > 0
        ? null
        : "No services found. Please verify the service ID."
    );
  };

  const fetchServiceData = async () => {
    setData([]);

    if (searchType === "quickSearch") {
      quickSearch();
    } else {
      setIsLoading(true);

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
    }
  };

  return (
    <Box w="m" mx="auto">
      <ServiceLookupInputs
        category={category}
        setCategory={setCategory}
        searchId={searchId}
        setSearchId={setSearchId}
        fetchServiceData={fetchServiceData}
        searchType={searchType}
        setSearchType={setSearchType}
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
