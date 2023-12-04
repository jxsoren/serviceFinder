"use client";

import React from "react";
import { Box, Heading, VStack, Text } from "@chakra-ui/react";

import { FaCalculator } from "react-icons/fa";
import { FaCompass } from "react-icons/fa";

import PageHeader from "./Components/PageHeader";

export default function Home() {
  return (
    <Box
      bgGradient="linear(to-r, #1E5DF9, #30E3CA)"
      minH="100vh"
      py={10}
      px={5}
    >
      <PageHeader icon={FaCompass} title={"Service Exporer Tool"} />
    </Box>
  );
}
