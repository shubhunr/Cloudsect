import React from "react";
import {
  Flex,
  Heading,
  IconButton,
  Spacer,
  useColorMode,
  VStack,
  Button,
} from "@chakra-ui/react";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import About from "./About"

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode == "dark";

  return (
    <VStack >
      <Flex width={"100%"} height="60px" position="fixed" bg="#1a202c">
      <Heading ml="8" size="xl" color="cyan.400" alignSelf="center" fontWeight="bold">Cloudsect</Heading>
          <Spacer></Spacer>
        <Button ml={8} colorScheme="blue" variant="link" >
          HOME
        </Button>
        <Button ml={8} colorScheme="blue" variant="link">
          ABOUT
        </Button>
        <Button ml={8} colorScheme="blue" variant="link">
          TEAM
        </Button>
        <Button ml={8} colorScheme="blue" variant="link" onClick={ () =>
        window.open(<About />)
        }>
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
          alignSelf="center"
          
        ></IconButton>
        <IconButton
          ml={2}
          icon={<FaInstagram />}
          isRound="true"
          onClick={toggleColorMode}
          alignSelf="center"
          
        ></IconButton>
        <IconButton
          ml={2}
          icon={<FaGithub />}
          isRound="true"
          onClick={toggleColorMode}
          alignSelf="center"
          mr={8}
        ></IconButton>
          <IconButton mr ="8" icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode} alignSelf="center"></IconButton>
      </Flex>
    </VStack>
  );
}
export default Navbar;
