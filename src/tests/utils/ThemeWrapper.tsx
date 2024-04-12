import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export const ThemeWrapper = ({ children }: Props) => (
  <ChakraProvider>{children}</ChakraProvider>
);
