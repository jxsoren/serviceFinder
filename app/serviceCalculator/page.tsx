"use client";

import { Center, Heading, VStack, Box } from "@chakra-ui/react";
import { FaCalculator } from "react-icons/fa";

import ServiceCalculator from "./Components/ServiceCalculator";

const ServiceCalculatorPage = () => {
  return (
    <Box
      bgGradient="linear(to-r, #1E5DF9, #30E3CA)"
      minH="100vh"
      py={10}
      px={5}
    >
      <VStack spacing={8} align="stretch">
        <Center>
          <Heading as="h1" size="2xl" mb={4} color="white">
            <FaCalculator style={{ display: "inline", marginRight: "10px" }} />
            Service Calculator
          </Heading>
        </Center>
        <Center>
          <ServiceCalculator />
        </Center>
      </VStack>
    </Box>
  );
};

export default ServiceCalculatorPage;
