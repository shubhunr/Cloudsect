import {
  Stack,
  useMediaQuery,
  Flex,
  Text,
  useColorMode,
  Box,
  VStack,
  Icon,
  Spacer,
} from "@chakra-ui/react";
import { MdGroups } from "react-icons/md";
import { SiTwitter } from "react-icons/si";
import { GrDeliver, GrBladesVertical } from "react-icons/gr";
import CountUp from 'react-countup';

function Team() {
  const { colorMode } = useColorMode();
  const isDark = colorMode == "dark";
  const { isNotSmallerScreen } = useMediaQuery("(min-width:600px)");

  return (
    <VStack>
      <Flex alignSelf="center">
        <Box width="1000px" align="center">
          <Text
            fontSize="6xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
            mt="20%"
          >
            Our team
          </Text>
          <Text fontSize="2xl" fontWeight="semibold">
            Our team can turn any inspiration into production-ready. All the
            type of apps are at their fingertips across desktop Web or mobile
            apps, with expert finishing, advanced support and hassle-free
            deployment. The Cloudsect makes it easy to do great work together.
          </Text>
        </Box>
      </Flex>
      <Flex alignSelf="center" mt="6%">
        <Box p={10} boxSize="300px">
          <Icon as={MdGroups} boxSize="50px" />
          <Spacer />
          <CountUp end={50} />
          <Text fontSize='2xl'>Happy Client</Text>
        </Box>
        <Box p={10} boxSize="300px">
          <Icon as={SiTwitter} boxSize="50px" />
          <Spacer />
          <CountUp end={150} />
          <Text fontSize='2xl'>Followers</Text>
        </Box>
        <Box p={10} boxSize="300px">
          <Icon as={GrDeliver} boxSize="50px" />
          <Spacer />
          <CountUp end={300} />
          <Text fontSize='2xl'>Project Delivery</Text>
        </Box>
        <Box p={10} boxSize="300px">
          <Icon as={GrBladesVertical} boxSize="50px" />
          <Spacer />
          <CountUp end={100} />
          <Text fontSize='2xl'>Project Done</Text>
        </Box>
      </Flex>
    </VStack>
  );
}

export default Team;
