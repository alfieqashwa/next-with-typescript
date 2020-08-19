import React, { ReactNode } from "react";
import Head from "next/head";
import { Container, Flex, Heading, HStack } from "@chakra-ui/core";
import { ColorModeSwitcher } from "@components/ColorModeSwitcher";
import { Logo } from "@components/Logo";
import { NextChakraLink } from "@components/NextChakraLink";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Container maxWidth="1200px">
      <header>
        <Flex py={4} justifyContent="space-between" alignItems="center" mb={8}>
          <Flex justifyContent="space-between" alignItems="center">
            <nav>
              <HStack spacing={12}>
                <NextChakraLink
                  href="/"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Logo h="1.5rem" pointerEvents="none" mr={4} />
                  <Heading size="lg">ASEC</Heading>
                </NextChakraLink>
                <NextChakraLink href="/whatwedo" fontWeight="bold">
                  What We Do
                </NextChakraLink>
                <NextChakraLink href="/whoweworkwith" fontWeight="bold">
                  Who We Work With
                </NextChakraLink>
                <NextChakraLink href="/about" fontWeight="bold">
                  About ASEC
                </NextChakraLink>
                <NextChakraLink href="/communities" fontWeight="bold">
                  Our Communities
                </NextChakraLink>
              </HStack>
            </nav>
          </Flex>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Flex>
      </header>
      {children}
    </Container>
  </div>
);

export default Layout;
