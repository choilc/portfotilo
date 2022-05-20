import { Center, Container } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Container mt={8} opacity={0.4}>
      <Center fontSize="sm">&copy; 2022 HoangDai All Rights Reserved.</Center>
      <Center fontSize="xs">(inspired by Takuya Matsuyama)</Center>
    </Container>
  );
};

export default Footer;
