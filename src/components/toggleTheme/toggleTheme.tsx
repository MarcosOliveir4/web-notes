import { Button, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

export const ToggleTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode} data-testid="toggleTheme">
      {colorMode === "light" ? (
        <FaMoon data-testid="moonIcon" />
      ) : (
        <FaSun data-testid="sunIcon" />
      )}
    </Button>
  );
};
