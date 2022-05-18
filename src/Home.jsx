import {
  Stack,
  useMediaQuery,
  Flex,
  Text,
  useColorMode,
  Box,
  Button,
  Spacer,
} from "@chakra-ui/react";
import React from "react";

function Home() {
  const { colorMode } = useColorMode();
  const isDark = colorMode == "dark";
  const { isNotSmallerScreen } = useMediaQuery("(min-width:600px)");

  return (
    <Stack>
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="center"
      >
        <Box mt={isNotSmallerScreen ? "0" : 16} align="center">
          <Text fontSize="5xl" fontWeight="semibold"  mt="10%">
            Welcome
          </Text>
          <Text fontSize="5xl" fontWeight="semibold" >
            to
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
            mt="2%"
          >
            CloudSect
          </Text>
          <Spacer></Spacer>
          <Text fontSize="xl" fontWeight="semibold" mt="10%" >
            We are Cloud Solution Expert & Creativity Team, We offer best &
            cloud ready Software solution & IT Services{" "}
          </Text>
          <Button mt="8" colorScheme="blue" onClick={() => window.open()}>
            Explore More
          </Button>
        </Box>
      </Flex>
    </Stack>
  );
}

export default Home;
