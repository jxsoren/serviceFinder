"use client";

import React from "react";
import {
  Box,
  Heading,
  VStack,
  Text,
  Button,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FaCalculator, FaCompass, FaSearch, FaTable } from "react-icons/fa";

import { usePathname } from "next/navigation";
import { Link } from "@chakra-ui/next-js";

import PageHeader from "./Components/PageHeader";

interface FeatureCardProps {
  icon: IconType;
  title: string;
  text: string;
  action: () => void;
  navLink: string;
}

const Home: React.FC = () => {
  return (
    <Box bgGradient="linear(to-r, #1E5DF9, #30E3CA)" minH="80vh" py={10} px={5}>
      <PageHeader icon={FaCompass} title={"Service Explorer Tool"} />

      <VStack spacing={10} mt={10} textAlign="center">
        <Heading color="white" as="h1" size="xl" mb={2}>
          Simplify Your Service Identification
        </Heading>
        <Text color="whiteAlpha.800" px={2}>
          Quickly find service details and calculate costs with ease.
        </Text>
        <Flex
          direction={{ base: "column", md: "row" }}
          wrap="wrap"
          justify="center"
          align="center"
          mt={8}
        >
          <FeatureCard
            icon={FaSearch}
            title="Service Lookup"
            text="Identify services by ID and browse details."
            action={() => console.log("Navigate to Service Lookup")}
            navLink="/serviceLookup"
          />
          <FeatureCard
            icon={FaCalculator}
            title="Service Qualification"
            text="Check service availability for a shipment."
            action={() => console.log("Navigate to Cost Calculator")}
            navLink="/serviceCalculator"
          />
        </Flex>
      </VStack>
    </Box>
  );
};

interface NavigationLinkProps {
  path: string;
}

const NavigationLink: React.FC<NavigationLinkProps> = ({ path }) => {
  return (
    <Link
      href={path}
      _hover={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Button
        size="sm"
        colorScheme="blue"
        variant="outline"
        borderColor="whiteAlpha.800"
        _hover={{ bg: "blue.500", borderColor: "blue.500" }}
      >
        Get Started
      </Button>
    </Link>
  );
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  text,
  action,
  navLink,
}) => {
  return (
    <VStack
      bg="whiteAlpha.300"
      p={5}
      m={2}
      borderRadius="xl"
      boxShadow="xl"
      _hover={{ bg: "whiteAlpha.400", cursor: "pointer" }}
      transition="background 0.3s ease"
    >
      <Icon as={icon} w={16} h={16} color="white" />
      <Heading color="white" as="h3" size="md">
        {title}
      </Heading>
      <Text color="whiteAlpha.800">{text}</Text>
      <NavigationLink path={navLink} />
    </VStack>
  );
};

export default Home;
