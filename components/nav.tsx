import { Box, Container, HStack, useColorModeValue } from "@chakra-ui/react";
import ButtonToggleTheme from "./buttonToggleTheme";
import LinkItem from "./linkItem";
import Logo from "./logo";

type Props = {
  path: string;
};

const Nav = ({ path }: Props) => {
  return (
    <Box
      as="nav"
      width="100%"
      p={4}
      position="fixed"
      top="0"
      left="0"
      borderBottom="1px solid #ccc"
      bg={useColorModeValue("purple.400", "blackAlpha.900")}
    >
      <Container
        width="container.md"
        p={0}
        display="grid"
        gridTemplateColumns="200px auto 40px"
      >
        <Logo />
        <HStack>
          <LinkItem path={path} href="/works">
            Works
          </LinkItem>
          <LinkItem path={path} href="/posts">
            Posts
          </LinkItem>
          <LinkItem
            path={path}
            href="https://github.com/choilc/portfotilo"
            target="_blank"
          >
            Resource
          </LinkItem>
        </HStack>
        <ButtonToggleTheme />
      </Container>
    </Box>
  );
};

export default Nav;
