import { VStack, Flex, Heading, IconButton } from "@chakra-ui/react";
import React from "react";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Navbar() {
  return (
    <VStack P={5}>
      <Flex width="100%">
        <Heading
          ml="8"
          szie="md"
          fontweight="semibold"
          color="cyan.400"
        >CloudSect</Heading>
      </Flex>
      <IconButton></IconButton>
    </VStack>
  );
}

export default Navbar;
