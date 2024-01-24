import React from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { MdArrowForward } from "react-icons/md";

interface NavigationLinkProps {
  path: string;
  label: string;
}

const NavigationLink: React.FC<NavigationLinkProps> = React.memo(
  ({ path, label }) => {
    return (
      <Link
        href={path}
        _hover={{ textDecoration: "none" }}
        _focus={{ boxShadow: "outline" }}
      >
        <Button
          size="md"
          colorScheme="whiteAlpha"
          variant="solid"
          leftIcon={<MdArrowForward />}
          fontSize="lg"
          fontWeight="bold"
          borderRadius="full"
          px={6}
          py={3}
          _hover={{
            bg: "yourHoverColor",
            transform: "translateY(-2px)",
            shadow: "md",
          }}
          _active={{
            bg: "yourActiveColor",
            transform: "translateY(0)",
          }}
        >
          {label}
        </Button>
      </Link>
    );
  }
);

NavigationLink.displayName = "NavigationLink";

export default NavigationLink;
