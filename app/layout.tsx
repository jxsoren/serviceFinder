import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Providers } from "./providers";
import { Box } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Service Explorer Tool",
  description: "Service Explorer Tool",
};

import Navbar from "./Nav/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Box
          style={{ background: "linear-gradient(to right, #1E5DF9, #30E3CA)" }}
          minH="100vh"
        >
          <Providers>
            <Navbar />
            {children}
          </Providers>
        </Box>
      </body>
    </html>
  );
}
