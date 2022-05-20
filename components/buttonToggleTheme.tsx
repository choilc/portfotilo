import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";

const ButtonToggleTheme = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label="Toggle Theme"
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      bg={useColorModeValue("blackAlpha.800", "purple.50")}
      colorScheme={useColorModeValue("purple.50", "blackAlpha.800")}
      onClick={toggleColorMode}
    >
      Toggle
    </IconButton>
  );
};

export default ButtonToggleTheme;
