import React from "react";

import { VStack, Center, Heading, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface PageHeaderProps {
  children: React.ReactNode;
  title: string;
  icon: IconType;
}

const PageHeader: React.FC<PageHeaderProps> = ({ children, title, icon }) => {
  return (
    <VStack spacing={8} align="stretch">
      <Center>
        <Heading as="h1" size="2xl" mb={4} color="white">
          <Icon as={icon} />
          {title}
        </Heading>
      </Center>
      <Center>{children}</Center>
    </VStack>
  );
};

export default PageHeader;
