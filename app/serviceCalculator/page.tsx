"use client";

import { Center, Heading, VStack, Box } from "@chakra-ui/react";

import { FaCalculator } from "react-icons/fa";

import ServiceCalculator from "./Components/ServiceCalculator";
import PageHeader from "../Components/PageHeader";

const ServiceCalculatorPage = () => {
  return (
    <Box minH="80vh" py={10} px={5}>
      <PageHeader icon={FaCalculator} title={"Service Calculator"} />
      <ServiceCalculator />
    </Box>
  );
};


export default ServiceCalculatorPage;
