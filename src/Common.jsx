import { Flex, Heading, Spacer, useColorMode, VStack } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import React from "react";
import { layout } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Team from "./Components/Team";
import Service from "./Components/Service";
import Portfolio from "./Components/Porfolio";
import B2B from "./Components/B2B.";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const App = () => {
    return(
      <><switch>
        <Route exact path = "/" component={Home} />
        <Route exact path = "/about" component={About} />
        <Route exact path = "/team" component={Team} />
        <Route exact path = "/service" component={Service} />
        <Route exact path = "/portfolio" component={Portfolio} />
        <Route exact path = "/B2B" component={B2B} />
        <Route exact path = "/Blog" component={Blog} />
        <Route exact path = "/contact" component={Contact} />
        </switch>
      </>
    )
  }
  return (
    <VStack padding={5}>
      <Flex width="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
          Cloudsect
        </Heading>
        <Spacer></Spacer>
        <Button ml={8} colorScheme="blue" variant="link">
          HOME
        </Button>
        <Button ml={8} colorScheme="blue" variant="link">
          ABOUT
        </Button>
        <Button ml={8} colorScheme="blue" variant="link">
          TEAM
        </Button>
        <Button ml={8} colorScheme="blue" variant="link">
          SERVICE
        </Button>
        <Button ml={8} colorScheme="blue" variant="link">
          PORTFOLIO
        </Button>
        <Button ml={8} colorScheme="blue" variant="link">
          B2B
        </Button>
        <Button ml={8} colorScheme="blue" variant="link">
          BLOG
        </Button>
        <Button ml={8} colorScheme="blue" variant="link">
          CONTACT
        </Button>
        <Spacer></Spacer>
        <IconButton
          icon={<FaLinkedin />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
        <IconButton
          ml={2}
          icon={<FaInstagram />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
        <IconButton
          ml={2}
          icon={<FaGithub />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
        <IconButton
          ml={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#26C6DA"
          fill-opacity="1"
          d="M0,96L120,133.3C240,171,480,245,720,229.3C960,213,1200,107,1320,53.3L1440,0L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
    </VStack>
  );
}


export default common;






import {
    Flex,
    Heading,
    Stack,
    useColorMode,
    useMediaQuery,
    VStack,
  } from "@chakra-ui/react";
  import React from "react";
  import { layout } from "@chakra-ui/react";
  import { Box } from '@chakra-ui/react'
  
  function Home() {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    return (
      <Stack>
        <Flex>
          <Box bg="tomato" w="100%" p={4} color="Black">
            This is the Box
          </Box>
        </Flex>
      </Stack>
    );
  }
  
  export default Home;



  <ChakraProvider>
        <ColorModeScript initialColorMode="light"></ColorModeScript>
        <App />
      </ChakraProvider>



  
<Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>