import {
  Stack,
  useMediaQuery,
  Flex,
  Text,
  useColorMode,
  Box,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { MdGroups } from "react-icons/md";
import { SiTwitter } from "react-icons/si";
import { GrDeliver, GrBladesVertical } from "react-icons/gr";

function Team() {
  const { colorMode } = useColorMode();
  const isDark = colorMode == "dark";
  const { isNotSmallerScreen } = useMediaQuery("(min-width:600px)");

  return (
    <VStack>
      <Flex alignSelf="center">
        <Box boxSize="1000px" align="center">
          <Text fontSize="6xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
            mt="20%">Our team</Text>
          <Text fontSize="2xl" fontWeight="semibold">
            Our team can turn any inspiration into production-ready. All the
            type of apps are at their fingertips across desktop Web or mobile
            apps, with expert finishing, advanced support and hassle-free
            deployment. The Cloudsect makes it easy to do great work together.
          </Text>
        </Box>
      </Flex>
      <Box alignSelf="center">
          <Box p={10}  boxSize="300px">
          <Icon as={MdGroups} />
          </Box>
          <Box p={10}  boxSize="300px">
          <Icon as={ SiTwitter } />
          </Box>
          <Box p={10}  boxSize="300px">
          <Icon as={ GrDeliver } />
          </Box>
          <Box p={10}  boxSize="300px">
          <Icon as={ GrBladesVertical } />
          </Box>
      </Box>
    </VStack>
  );
};

 export default Team;