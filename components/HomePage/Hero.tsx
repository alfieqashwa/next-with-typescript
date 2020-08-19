import {
  Box,
  Center,
  Skeleton,
  Stack,
  HStack,
  Divider,
  Text,
} from "@chakra-ui/core";

export const Hero = () => (
  <HStack>
    <Stack w={1 / 3} spacing={3} h="400px" color="white">
      <Skeleton startColor="pink.500" endColor="orange.500" w="200" h="80px" />
      <Skeleton startColor="pink.500" endColor="orange.500" w="200" h="40px" />
      <Skeleton startColor="pink.500" endColor="orange.500" w="200" h="40px" />
      <Skeleton startColor="pink.500" endColor="orange.500" w="200" h="40px" />
      <Skeleton startColor="pink.500" endColor="orange.500" w="200" h="40px" />
      <Skeleton startColor="pink.500" endColor="orange.500" w="200" h="40px" />
      <Skeleton startColor="pink.500" endColor="orange.500" w="200" h="40px" />
    </Stack>
    <Divider orientation="vertical" mx={2} />
    <Center w={2 / 3} h="400px" bg="tomato" color="white" borderRadius="md">
      <Box as="span" fontWeight="bold" fontSize="lg">
        carousel
      </Box>
    </Center>
  </HStack>
);
