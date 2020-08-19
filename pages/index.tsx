import Layout from "@components/Layout";
import { Hero, Section1 } from "@components/HomePage";
import { HStack, Box, Center, Divider } from "@chakra-ui/core";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Hero />
    <Divider orientation="horizontal" my={4} />
    <Section1 />
    <Divider orientation="horizontal" my={4} />
  </Layout>
);

export default IndexPage;
