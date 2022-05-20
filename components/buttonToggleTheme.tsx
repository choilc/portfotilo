import { Button, useColorMode } from "@chakra-ui/react";

const ButtonToggleTheme = () => {
  const { toggleColorMode } = useColorMode();
  return <Button onClick={toggleColorMode}>Toggle</Button>;
};

export default ButtonToggleTheme;
