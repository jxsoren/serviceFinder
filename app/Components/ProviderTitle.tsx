import React from "react";

import { Box, Heading } from "@chakra-ui/react";

type ProviderColors = {
  USPS: string;
  UPS: string;
  FedEx: string;
  DHL: string;
  [key: string]: string;
};

interface ProviderTitleProps {
  children: React.ReactNode;
  provider: string;
}

const ProviderTitle: React.FC<ProviderTitleProps> = ({
  children,
  provider,
}) => {
  const providerColors: ProviderColors = {
    USPS: "#004B87",
    UPS: "#FCB900",
    FedEx: "#4D148C",
    DHL: "#D40511",
  };

  let providerTitleColor = providerColors[provider] || "white";

  return (
    <Box>
      <Heading size="lg" color={providerTitleColor}>
        {children}
      </Heading>
    </Box>
  );
};

export default ProviderTitle;
