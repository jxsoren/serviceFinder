import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Providers } from "./providers";
import { Box } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Service Calculator",
  description: "Calculate shipping services and rates for your package.",
};

import Navbar from "./Components/Nav/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Service Calculator</title>
      </head>
      <body>
        <Box
          bgGradient="linear(to-r, #1E5DF9, #30E3CA)"
          minH="100vh"
          py={10}
          px={5}
        >
          <Navbar />
          <Providers>{children}</Providers>
        </Box>
      </body>
    </html>
  );
}
