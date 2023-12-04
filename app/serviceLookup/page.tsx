import React from "react";
import {
  Box,
  Heading,
  Stack,
  Center,
  VStack,
  Fade,
  Text,
  Button,
  Input,
} from "@chakra-ui/react";

import ServiceLookup from "./Components/ServiceLookup";

export default function ServiceLookupPage() {
  return (
    <Box minH="100vh" p={4}>
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
          <Heading as="h1" size="xl" textAlign="center">
            Service Lookup
          </Heading>

          

          <ServiceLookup />
        </VStack>
      </Center>
    </Box>
  );
}
