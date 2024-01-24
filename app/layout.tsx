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
          style={{
            background: `radial-gradient(circle, rgba(30,93,249,1) 0%, rgba(10,45,87,1) 100%)`,
            backgroundSize: "cover",
            backgroundPosition: "center, center",
            backgroundRepeat: "repeat, no-repeat",
            minHeight: "100vh",
          }}
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

// background: `url('/curvyLines.svg'), radial-gradient(circle, rgba(30,93,249,1) 0%, rgba(10,45,87,1) 100%)`,
