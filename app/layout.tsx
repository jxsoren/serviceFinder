import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Service Calculator",
  description: "Calculate shipping services and rates for your package.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: "#1E5DF9" }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
