import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Box, ChakraProvider } from "@chakra-ui/react";
import theme from "../libs/theme";
import Head from "next/head";
import Nav from "../components/nav";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Box as="main">
      <Head>
        <title>ChoiLo - Homepage</title>
        <meta name="viewport" content="width=device-with, initial-scale=1" />
        <meta name="description" content="Generated by create next app" />
      </Head>
      <ChakraProvider theme={theme}>
        <Nav path={router.asPath} />
        <Component {...pageProps} />
      </ChakraProvider>
    </Box>
  );
}

export default MyApp;
