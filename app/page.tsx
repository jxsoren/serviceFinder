import React from "react";
import { Box, Heading, Stack, Center, VStack, Fade } from "@chakra-ui/react";
import { FaCalculator } from "react-icons/fa";

import ServiceCalculator from "./Components/ServiceCalculator";

export default function Home() {
  return (
    <Box
      bgGradient="linear(to-r, blue.400, teal.300)"
      minH="100vh"
      py={10}
      px={5}
    >
      <VStack spacing={8} align="stretch">
        <Center>
          <Fade in={true} delay={0.5}>
            <Heading as="h1" size="2xl" mb={4} color="white">
              <FaCalculator
                style={{ display: "inline", marginRight: "10px" }}
              />
              Service Calculator
            </Heading>
          </Fade>
        </Center>
        <Center>
          <ServiceCalculator />
        </Center>
      </VStack>
    </Box>
  );
}
