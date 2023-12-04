import React from "react";

import { VStack, Center, Heading, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface PageHeaderProps {
  title: string;
  icon: IconType;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, icon }) => {
  return (
    <VStack spacing={8} align="stretch">
      <Center>
        <Heading as="h1" size="2xl" mb={4} color="white">
          <Icon as={icon} />
          {title}
        </Heading>
      </Center>
    </VStack>
  );
};

export default PageHeader;
