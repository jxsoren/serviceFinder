"use client";

import {
  Box,
  Heading,
  Text,
  Link,
  Stack,
  Input,
  Center,
} from "@chakra-ui/react";

import Inputs from "./Inputs";

export default function Home() {
  return (
    <Stack>
      <Center>
        <Heading as="h1" size="2xl" mb={4}>
          Service Calculator
        </Heading>
      </Center>

      <Inputs />
    </Stack>
  );
}
