import {
  Stack,
  useMediaQuery,
  Flex,
  Text,
  useColorMode,
  Box,
  Button,
  Spacer,
  Image,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { GoGraph } from "react-icons/go";
import { MdGroups } from "react-icons/md";
import { IoCloudDoneSharp } from "react-icons/io5";
import { GrDeliver } from "react-icons/gr";

function Home() {
  const { colorMode } = useColorMode();
  const isDark = colorMode == "dark";
  const { isNotSmallerScreen } = useMediaQuery("(min-width:600px)");

  return (
    <Stack>
      <Flex alignSelf="center" mt="6%" >
        <Box p={10}  boxSize="300px" align="center">
          <IconButton
            icon={<MdGroups boxSize="100" />}
            isRound="true"
          ></IconButton>
          <Text fontSize="xl" fontWeight="bold" mt="10%">
            CREATIVE CONTENT
          </Text>
          <Text fontSize="md" fontWeight="semibold" mt="10%">
            We are providing a unique solution for your problem
          </Text>
        </Box>
        <Box p={10} boxSize="300px" align="center">
          <IconButton icon={<IoCloudDoneSharp />} isRound="true"></IconButton>
          <Text fontSize="xl" fontWeight="bold" mt="10%">
            CLOUD MIGRATION
          </Text>
          <Text fontSize="md" fontWeight="semibold" mt="10%">
            We help you to rebuild your solution to migrate on cloud
          </Text>
        </Box>
        <Box p={10} boxSize="300px" align="center">
          <IconButton icon={<GoGraph />} isRound="true"></IconButton>
          <Text fontSize="xl" fontWeight="bold" mt="10%">
            STRATEGY
          </Text>
          <Text fontSize="md" fontWeight="semibold" mt="10%">
            Planning and Strategy making for project success
          </Text>
        </Box>
        <Box p={10} boxSize="300px" align="center">
          <IconButton icon={<GrDeliver />} isRound="true"></IconButton>
          <Text fontSize="xl" fontWeight="bold" mt="10%">
            CLOUD READY
          </Text>
          <Text fontSize="md" fontWeight="semibold" mt="10%">
            Help you to convert your idea to industry
          </Text>
        </Box>
      </Flex>
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="center"
        
      >
        <Box mt={isNotSmallerScreen ? "0" : 16} align="center">
          <Text fontSize="5xl" fontWeight="semibold" >
            About <b>Cloudsect</b> Objective
          </Text>
          <Text fontSize="1xl" fontWeight="semibold" ml="25%" mr="25%">
            Cloudsect is a startup solution provider organization for cloud
            based applications. Company has been promoted by some highly
            experienced Professionals dedicated to provide total IT solutions
            under one roof. Cloudsect provides high quality online services for
            software development and hardware & software platforms on latest
            technologies.
          </Text>
          <Button
            mt="8"
            colorScheme="teal"
            variant="outline"
            onClick={() => window.open()}
          >
            Know More
          </Button>
        </Box>
      </Flex>
    </Stack>
  );
}

export default Home;
