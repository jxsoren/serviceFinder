"use client";

import React, { useState } from "react";
import {
  Box,
  Text,
  Center,
  Spinner,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

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
import ReverseLookupInputs from "./ReverseLookup/ReverseLookupInputs";

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

  const [provider, setProvider] = useState<string>("usps");
  const [domain, setDomain] = useState<string>("domestic");

  const handleCloseError = () => {
    setError(null);
    setDisplayResults(false);
  };

  const clearServiceData = () => {
    setData([]);
    setError(null);
    setDisplayResults(false);
  };

  const quickReverseSearch = () => {
    const quickSearchData =
      category === "shipping" ? shippingCodesData : ecommerceCodesData;

    setIsLoading(true);

    const filteredData = quickSearchData.services.filter(
      (service: ServiceData) => service.carrier_code === provider
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

        const groupServicesByCarrier = (services: ServiceData[]) => {
          const groupedServices: ServiceData[] = [];

          services.forEach((service: ServiceData) => {
            const { carrier_code } = service;

            const carrierExists = groupedServices.some(
              (groupedService: ServiceData) =>
                groupedService.carrier_code === carrier_code
            );

            if (carrierExists) {
              const index = groupedServices.findIndex(
                (groupedService: ServiceData) =>
                  groupedService.carrier_code === carrier_code
              );

              groupedServices[index].package_types.push(
                ...service.package_types
              );
            } else {
              groupedServices.push(service);
            }
          });

          return groupedServices;
        };

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
      <Tabs variant="soft-rounded" colorScheme="blue.700">
        <TabList mb="1em">
          <Tab _selected={{ color: "white", bg: "blue.700" }}>
            Service ID Lookup
          </Tab>
          <Tab _selected={{ color: "white", bg: "blue.700" }}>
            Reverse Service Lookup
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <ServiceLookupInputs
              category={category}
              setCategory={setCategory}
              searchId={searchId}
              setSearchId={setSearchId}
              fetchServiceData={fetchServiceData}
              searchType={searchType}
              setSearchType={setSearchType}
              clearServiceData={clearServiceData}
            />
          </TabPanel>

          <TabPanel>
            <ReverseLookupInputs
              provider={provider}
              setProvider={setProvider}
              domain={domain}
              setDomain={setDomain}
              searchType={searchType}
              setSearchType={setSearchType}
              fetchServiceData={quickReverseSearch}
              clearServiceData={clearServiceData}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>

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
