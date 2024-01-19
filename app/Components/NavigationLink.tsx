"use client";

import React from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

interface NavigationLinkProps {
  path: string;
}

const NavigationLink: React.FC<NavigationLinkProps> = React.memo(({ path }) => {
  return (
    <Link
      href={path}
      _hover={{ textDecoration: "none" }}
      _focus={{ boxShadow: "outline" }}
    >
      <Button
        size="sm"
        colorScheme="blue"
        variant="outline"
        borderColor="whiteAlpha.800"
        _hover={{ bg: "blue.500", borderColor: "blue.500" }}
        _focus={{ boxShadow: "outline" }}
      >
        Get Started
      </Button>
    </Link>
  );
});

export default NavigationLink;
