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
          <Text color="gray.500" textAlign="center">
            Enter A Service ID to lookup the associated service...
          </Text>

          <Fade in={true}>
            <Stack spacing={3}>
              <Input placeholder="Enter Service ID" size="md" />
              <Button colorScheme="blue">Explore</Button>
            </Stack>
          </Fade>
        </VStack>
      </Center>
    </Box>
  );
}
