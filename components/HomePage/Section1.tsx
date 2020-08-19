import { Fragment } from "react";
import { HStack, Box, Center, Divider } from "@chakra-ui/core";

export const Section1 = () => (
  <HStack>
    <Center w={1 / 3} h="300px" bg="gray.700" color="white" borderRadius="md">
      <Box as="span" fontWeight="bold" fontSize="lg">
        News
      </Box>
    </Center>
    <Divider orientation="vertical" mx={4} />
    <Center w={2 / 3} h="300px" bg="gray.600" color="white" borderRadius="md">
      <SubMenu />
    </Center>
  </HStack>
);

const SubMenu = () => (
  <Fragment>
    <Center w={1 / 3} h="300px" bg="gray.600" color="white">
      <Box as="span" fontWeight="bold" fontSize="lg">
        Statements
      </Box>
    </Center>
    <Center w={1 / 3} h="300px" bg="gray.600" color="white">
      <Box as="span" fontWeight="bold" fontSize="lg">
        Meetings
      </Box>
    </Center>
    <Center w={1 / 3} h="300px" bg="gray.600" color="white">
      <Box as="span" fontWeight="bold" fontSize="lg">
        Chairmanship
      </Box>
    </Center>
  </Fragment>
);
