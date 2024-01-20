"use client";

import React from "react";
import { VStack, Heading, Text, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import NavigationLink from "./NavigationLink";

interface FeatureCardProps {
  icon: IconType;
  title: string;
  text: string;
  navLink: string;
}

const FeatureCard: React.FC<FeatureCardProps> = React.memo(
  ({ icon, title, text, navLink }) => {
    return (
      <VStack
        bg="whiteAlpha.300"
        p={5}
        m={2}
        borderRadius="xl"
        boxShadow="xl"
        _hover={{ bg: "whiteAlpha.400", cursor: "pointer" }}
        transition="background 0.3s ease"
        role="group"
        tabIndex={0}
        aria-label={`Navigate to ${title}`}
      >
        <Icon as={icon} w={16} h={16} color="white" />
        <Heading color="white" as="h3" size="md">
          {title}
        </Heading>
        <Text color="whiteAlpha.800">{text}</Text>
        <NavigationLink path={navLink} />
      </VStack>
    );
  }
);

FeatureCard.displayName = "FeatureCard";

export default FeatureCard;
