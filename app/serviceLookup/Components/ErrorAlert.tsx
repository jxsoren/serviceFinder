"use client";

import React from "react";
import {
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useDisclosure,
  CloseButton,
} from "@chakra-ui/react";

interface ErrorAlertProps {
  error: string;
  handleCloseError: () => void;
  displayResults: boolean;
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({
  error,
  handleCloseError,
  displayResults,
}) => {
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: false });

  return (
    <Box py={8}>
      <Alert status="error">
        <AlertIcon />
        <Box flex="1">
          <AlertTitle>Error!</AlertTitle>
          <AlertDescription display="block">{error}</AlertDescription>
        </Box>
        <CloseButton
          alignSelf="flex-start"
          position="relative"
          right={-1}
          top={-1}
          onClick={handleCloseError}
        />
      </Alert>
    </Box>
  );
};

export default ErrorAlert;
