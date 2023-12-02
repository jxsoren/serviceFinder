"use client";

import React from "react";
import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { FaCompass } from "react-icons/fa";

import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      paddingY="1rem"
      paddingX={{ base: "1rem", md: "2rem" }}
      bg="blue.800"
      color="white"
      boxShadow="0px 2px 10px rgba(0, 0, 0, 0.1)"
      position="relative"
      zIndex="2"
    >
      <Flex align="center" mr={5}>
        <Icon as={FaCompass} boxSize="40px" mr={2} />
        <Text fontSize="xl" fontWeight="bold" letterSpacing="wide">
          Service Explorer
        </Text>
      </Flex>

      <Box
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        justifyContent="flex-end"
        mt={{ base: 4, md: 0 }}
      >
        <NavLink href="/">Home</NavLink>
        <NavLink href="/serviceLookup">Lookup</NavLink>
        <NavLink href="/serviceCalculator">Calculator</NavLink>
      </Box>
    </Flex>
  );
};

export default Navbar;
