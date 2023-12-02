import React from "react";
import { Box, Heading, VStack, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box minH="100vh" p={4}>
      <VStack
        spacing={6}
        align="stretch"
        maxW="xl"
        mx="auto"
        p={8}
        boxShadow="lg"
        borderRadius="lg"
        bg="white"
      >
        <Heading as="h1" size="xl" textAlign="center">
          Service Explorer Tool
        </Heading>
        <Text color="gray.500" textAlign="center">
          :D
        </Text>
      </VStack>
    </Box>
  );
}
