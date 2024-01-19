"use client";

import React from "react";
import {
  Box,
  Heading,
  VStack,
  Text,
  Button,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { FaCalculator, FaCompass, FaSearch, FaTable } from "react-icons/fa";

import PageHeader from "./Components/PageHeader";
import FeatureCard from "./Components/FeatureCard";

const Home: React.FC = () => {
  return (
    <Box bgGradient="linear(to-r, #1E5DF9, #30E3CA)" minH="80vh" py={10} px={5}>
      <PageHeader icon={FaCompass} title={"Service Explorer Tool"} />

      <VStack spacing={10} mt={10} textAlign="center">
        <Heading color="white" as="h1" size="xl" mb={2}>
          Simplify Your Service Identification
        </Heading>
        <Text color="whiteAlpha.800" px={2}>
          Quickly find service details and calculate costs with ease.
        </Text>
        <Flex
          direction={{ base: "column", md: "row" }}
          wrap="wrap"
          justify="center"
          align="center"
          mt={8}
        >
          <FeatureCard
            icon={FaSearch}
            title="Service Lookup"
            text="Identify services by ID and browse details."
            navLink="/serviceLookup"
          />
          <FeatureCard
            icon={FaCalculator}
            title="Service Qualification"
            text="Check service availability for a shipment."
            navLink="/serviceCalculator"
          />
        </Flex>
      </VStack>
    </Box>
  );
};

export default Home;
