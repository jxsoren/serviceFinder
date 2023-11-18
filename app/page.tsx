"use client";

import {
  Box,
  Heading,
  Text,
  Link,
  Stack,
  Input,
} from "@chakra-ui/react";

import Inputs from "./Inputs"

export default function Home() {
  return (
    <Stack>
      <Heading as="h1" size="2xl" mb={4}>
        Hello
      </Heading>

      <Inputs />
    </Stack>
  );
}
