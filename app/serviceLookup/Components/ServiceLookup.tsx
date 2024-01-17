"use client";

import React, { useState } from "react";
import {
  Box,
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

interface CSVServiceData {
  id: string;
  serviceName: string;
  providerName: string;
  source: string;
}

export interface ServiceData {
  service_id: number | string;
  service: string;
  service_code: string;
  carrier_code: string;
  category: string;
  package_types: PackageType[];
  source: string;
}

import ServiceLookupInputs from "./ServiceLookupInputs";
import ReverseLookupInputs from "./ReverseLookup/ReverseLookupInputs";
import TableLookupInputs from "./TableLookup/TableLookupInputs";

import ServiceLookupResults from "./ServiceLookupResults";

import ecommerceCodes from "../json/ecommerceCodes.json";
import shippingCodes from "../json/shippingCodes.json";

const ecommerceCodesData: { services: ServiceData[] } = ecommerceCodes as any;
const shippingCodesData: { services: ServiceData[] } = shippingCodes as any;

const ServiceLookup = () => {
  const [searchType, setSearchType] = useState<string>("quickSearch");
  const [tabIndex, setTabIndex] = useState<number>(0);
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

  const handleLookupTypeChange = (index: number) => {
    setTabIndex(index);
    setSearchType("quickSearch");
    clearServiceData();
  };

  const quickSearch = () => {
    setIsLoading(true);

    const quickSearchData =
      category === "shipping" ? shippingCodesData : ecommerceCodesData;

    const filteredServiceIdData = quickSearchData.services.filter(
      (service: ServiceData) => service.service_id === searchId
    );

    const filteredReverseData = quickSearchData.services.filter(
      (service: ServiceData) =>
        (service.service_code && service.service_code.includes(provider)) ||
        (service.carrier_code && service.carrier_code.includes(provider))
    );

    if (tabIndex === 0 && filteredServiceIdData.length > 0) {
      setData(filteredServiceIdData);
      setDisplayResults(true);
      setIsLoading(false);
    } else if (tabIndex === 1 && filteredReverseData.length > 0) {
      setData(filteredReverseData);
      setDisplayResults(true);
      setIsLoading(false);
    } else if (tabIndex === 2) {
    } else {
      setData([]);
      setError("No services found. Please verify the service ID.");
      setDisplayResults(false);
      setIsLoading(false);
    }
  };

  const convertCSVToServiceData = (
    csvData: CSVServiceData[]
  ): ServiceData[] => {
    return csvData.map((csvItem) => ({
      service_id: csvItem.id,
      service: csvItem.serviceName,
      service_code: "",
      carrier_code: "",
      source: csvItem.source,
      category: "",
      package_types: [
        {
          type: "",
          name: "",
        },
      ],
    }));
  };

  const searchCSV = async (searchId: string) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/csv-data");
      const csvData: CSVServiceData[] = await response.json();

      let filteredData = csvData.filter((item) => item.id === searchId);
      console.log(csvData);
      console.log(searchId);

      const convertedData = convertCSVToServiceData(filteredData);

      setData(convertedData);
      console.log(data);
      setDisplayResults(true);
    } catch (error) {
      setError("Error fetching data.");
      setDisplayResults(false);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchServiceData = async () => {
    clearServiceData();

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
        const filteredIdData = json.services.filter(
          (service: any) => service.service_id === searchId
        );

        const filteredJSONRevsereData = json.services.filter(
          (service: ServiceData) =>
            (service.service_code && service.service_code.includes(provider)) ||
            (service.carrier_code && service.carrier_code.includes(provider))
        );

        const filteredData =
          tabIndex === 0 ? filteredIdData : filteredJSONRevsereData;

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
      <Tabs
        variant="soft-rounded"
        colorScheme="blue.700"
        onChange={handleLookupTypeChange}
      >
        <TabList mb="1em">
          <Tab _selected={{ color: "white", bg: "blue.700" }}>
            Service ID Lookup
          </Tab>
          <Tab _selected={{ color: "white", bg: "blue.700" }}>
            Reverse Service Lookup
          </Tab>
          <Tab _selected={{ color: "white", bg: "blue.700" }}>
            Service Table Lookup
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
              fetchServiceData={fetchServiceData}
              clearServiceData={clearServiceData}
            />
          </TabPanel>
          <TabPanel>
            <TableLookupInputs
              searchId={searchId.toString()}
              setSearchId={setSearchId}
              searchCSV={searchCSV}
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
