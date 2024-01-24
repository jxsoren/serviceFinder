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
      color="whiteAlpha.900"
      backgroundColor={"blue.900"}
      // boxShadow="lg"
      // borderBottom={1}
      // borderStyle={"solid"}
      // borderColor="alphaWhite.200"
    >
      <Flex align="center" mr={5}>
        <Icon as={FaCompass} boxSize="40px" mr={2} />
        <Text fontSize="xl" fontWeight="bold" letterSpacing="wide">
          Service Explorer
        </Text>
      </Flex>

      <Box
        display={{ base: "none", md: "flex" }}
        alignItems="center"
        flexGrow={1}
        justifyContent="flex-start"
      >
        <NavLink href="/">Home</NavLink>
        <NavLink href="/serviceLookup">Lookup</NavLink>
        <NavLink href="/serviceCalculator">Calculator</NavLink>
      </Box>
    </Flex>
  );
};

export default Navbar;
