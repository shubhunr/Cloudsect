import {
  VStack,
  useMediaQuery,
  Flex,
  Text,
  useColorMode,
  Box,
  Button,
  Spacer,
  Center,
  Container,
} from "@chakra-ui/react";
import React from "react";
import About from "./About"


function Home() {
  const { colorMode } = useColorMode();
  const isDark = colorMode == "dark";
  const { isNotSmallerScreen } = useMediaQuery("(min-width:600px)");

  return (
    <VStack width="100%" height="915px" >
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="center" 
        mt="12%"
        
        >
      
        <Box mt={isNotSmallerScreen ? "0" : 16}  align="center">
          <Text fontSize="5xl" fontWeight="semibold">
            Welcome
          </Text>
          <Text fontSize="5xl" fontWeight="semibold" >
            to
          </Text><br />
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
            
          >
            CloudSect
          </Text><br />
          <Spacer></Spacer>
          <Text fontSize="xl" fontWeight="semibold" >
            We are Cloud Solution Expert & Creativity Team, We offer best &
            cloud ready Software solution & IT Services{" "}
          </Text><br /><br />
          <Button  colorScheme="blue" onClick={() => window.open(<About />)}>
            Explore More
          </Button>
        </Box>
      </Flex>
      
    </VStack>
  );
}

export default Home;
