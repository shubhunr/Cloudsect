import React from "react";
import { Flex, Heading, IconButton, Spacer, useColorMode, VStack, Button } from "@chakra-ui/react";
import {FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa';

function Navbar()  {

  const {colorMode, toggleColorMode} = useColorMode();
  const isDark = colorMode =="dark";

  return(

    <VStack p={5}>
        <Flex width={"100%"} position="fixed">
          <Heading ml="8" size="md" fontWeight='semibold' color="cyan.400">Cloudsect</Heading>
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
          <IconButton ml ="8" icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
        </Flex>
      </VStack>
  )
}
 export default Navbar;

