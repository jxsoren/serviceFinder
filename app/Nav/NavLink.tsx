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
      color={isActive ? "blue.600" : "white.100"}
      _hover={{
        textDecoration: "none",
        color: "blue.100",
        bg: "blue.600",
      }}
      transition="background-color 0.2s, color 0.2s"
    >
      {children}
    </Link>
  );
};

export default NavLink;
