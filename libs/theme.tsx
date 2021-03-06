import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode("purple.50", "blackAlpha.800")(props),
    },
  }),
};

const theme = extendTheme({ styles });
export default theme;
