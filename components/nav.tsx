import { Box, Container, HStack, Stack } from "@chakra-ui/react";
import ButtonToggleTheme from "./buttonToggleTheme";
import LinkItem from "./linkItem";
import Logo from "./logo";

const Nav = ({ path }: any) => {
  return (
    <Box
      as="nav"
      width="100%"
      p={4}
      position="fixed"
      top="0"
      left="0"
      borderBottom="1px solid #ccc"
    >
      <Container width="container.md" p={0} display="flex">
        <Logo />
        <HStack>
          <LinkItem path={path} href="/works">
            Works
          </LinkItem>
          <LinkItem path={path} href="/posts">
            Posts
          </LinkItem>
          <LinkItem path={path} href="github.com" target="_blank">
            Resource
          </LinkItem>
        </HStack>
        <ButtonToggleTheme />
      </Container>
    </Box>
  );
};

export default Nav;
