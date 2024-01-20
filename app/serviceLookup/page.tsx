"use client";

import React from "react";
import { Box, Center, VStack } from "@chakra-ui/react";

import { CiSearch } from "react-icons/ci";

import ServiceLookup from "./Components/ServiceLookup";
import PageHeader from "../Components/PageHeader";

export default function ServiceLookupPage() {
  return (
    <Box bgGradient="linear(to-r, #1E5DF9, #30E3CA)" minH="80vh" py={10} px={5}>
      <PageHeader icon={CiSearch} title={"Service Lookup"} />
      <Center>
        <VStack
          spacing={4}
          align="stretch"
          maxW="xl"
          mx="auto"
          p={4}
          boxShadow="lg"
          borderRadius="lg"
          bg="white"
        >
          <ServiceLookup />
        </VStack>
      </Center>
    </Box>
  );
}
