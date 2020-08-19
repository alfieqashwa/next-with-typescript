import { Box, Code, Text, Link, VStack, Grid } from "@chakra-ui/core";
import Layout from "@components/Layout";
import { Logo } from "@components/Logo";
import { NextChakraLink } from "@components/NextChakraLink";

const CopyIndex = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Box textAlign="center" fontSize="x1">
      <Grid
        minH="100vh"
        p={3}
        direction="column"
        align="center"
        justify="center"
      >
        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
          <Text>
            Edit <Code fontSize="xl">pages/index.tsx</Code> and save to reload.
            <br />
            <br />
            <NextChakraLink href="/properties" color="teal.500">
              View the properties
            </NextChakraLink>{" "}
            to see the Nextjs <Code fontSize="xl">&lt;Link&gt;</Code> in action
          </Text>
          <Link
            color="teal.500"
            fontSize="2x1"
            href="https://chakra-ui.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more about Chakra
          </Link>
        </VStack>
      </Grid>
    </Box>
  </Layout>
);

export default CopyIndex;
