import { Divider, Flex, Heading, Spacer } from "@chakra-ui/react";

import { ToggleTheme } from "../toggleTheme";

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <>
      <Flex p={5} data-testid="header">
        <Heading data-testid="header-title">{title}</Heading>
        <Spacer />
        <ToggleTheme />
      </Flex>
      <Divider />
    </>
  );
};
