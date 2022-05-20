import { ArrowRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import NextLink from "next/link";
import { BioItem, YearBio } from "../components/Bio";
const Home: NextPage = () => {
  return (
    <Container mt="90px">
      <Center
        bg={useColorModeValue("purple.200", "blackAlpha.700")}
        p={2}
        borderRadius="5px"
      >
        Hello, I&apos;m frond-end developer based in VietNam!
      </Center>
      <Box mt="30px">
        <Grid templateColumns="auto 150px" justifyContent="space-between">
          <GridItem>
            <Heading>Choi Lo</Heading>
            <Text>Developer / Pro player</Text>
          </GridItem>
          <GridItem>
            <Image
              alt="Songoku"
              src="https://i.pinimg.com/474x/a5/09/d4/a509d47cc5895edd52d65385e92688a6.jpg"
              borderRadius="50%"
              border="2px solid purple"
            />
          </GridItem>
        </Grid>
      </Box>
      <Box mt="30px">
        <Heading as="h3" size="lg" textDecoration="underline">
          Works
        </Heading>
        <Text m={2}>Choi Lo is a pro player</Text>
        <NextLink href="/works" passHref>
          <a>
            <Button colorScheme="blue" rightIcon={<ArrowRightIcon />}>
              My portfolio
            </Button>
          </a>
        </NextLink>
      </Box>
      <Box mt="30px">
        <Heading as="h3" size="lg" textDecoration="underline">
          Bio
        </Heading>
        <BioItem mt={2}>
          <YearBio>1999</YearBio>
          <Text>Born in LaiChau, VietNam</Text>
        </BioItem>
        <BioItem mt={2}>
          <YearBio>2017</YearBio>
          <Text>Learn at VNU University of Enginerring and Technology</Text>
        </BioItem>
        <BioItem mt={2}>
          <YearBio>2020</YearBio>
          <Text>Work at BUNBU COMPANY LIMITED as Intern web developer</Text>
        </BioItem>
        <BioItem mt={2}>
          <YearBio>2021</YearBio>
          <Text>
            Completed the Bachelor&apos;s degree of Information Technology at
            VNU University of Enginerring and Technology
            <br />
            Worked at BUNBU COMPANY LIMITED as Frond-end developer
          </Text>
        </BioItem>
      </Box>
    </Container>
  );
};

export default Home;
