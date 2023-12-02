"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Link } from "@chakra-ui/next-js";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      px={4}
      py={2}
      rounded="md"
      fontWeight={isActive ? "bold" : "normal"}
      color={isActive ? "blue.300" : "gray.200"}
      _hover={{
        textDecoration: "none",
        color: "blue.400",
        bg: "blue.700",
      }}
      transition="background-color 0.2s, color 0.2s"
    >
      {children}
    </Link>
  );
};

export default NavLink;
