"use client";

import React from "react";

import { VStack, Center, Heading, Icon, Box, Flex } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface PageHeaderProps {
  title: string;
  icon: IconType;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, icon }) => {
  return (
    <Flex
      p={4}
      align="center"
      justify="center"
      borderRadius="md"
      fontWeight="bold"
    >
      <Icon as={icon} color="white" boxSize="3.25em" mr={2} />
      <Heading
        as="h1"
        size="4xl"
        color="white"
        fontWeight="bold"
        letterSpacing="wide"
      >
        {title}
      </Heading>
    </Flex>
  );
};

export default PageHeader;
