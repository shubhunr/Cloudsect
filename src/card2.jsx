import React from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Box, Flex, Text } from "@chakra-ui/layout";
import Icon from "@chakra-ui/icon";
import { RiUploadCloudFill } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa";
import { MdOutlineSupport, MdOutlineSupportAgent } from "react-icons/md";

function Card2() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Flex
      alignSelf="center" pb="50px"
      direction={isNotSmallerScreen ? "row" : "column"}
      w="100%"
      maxWidth={{ base: "100vh", md: "130vh", md: "130vh", xl: "130vh" }}
    >
      <Box alignSelf="center" px="25%">
        <Flex direction={isNotSmallerScreen ? "row" : "column"}>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="blue.400"
            h="27vh"
            w="27vh"
            justify="flex-end"
          >
            <Icon as={RiUploadCloudFill} p="4" w="24" h="24" color="ehite" />
            <Text color="white" p="4" fontSize="xl" fontWeight="bold">
              Cloud Backup
            </Text>
            <Text color="white" p="4" fontSize="md" fontWeight="semibold">
              Protect your data on cloud with Realtime sync
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="27vh"
            w="27vh"
            justify="flex-end"
            _hover={{ bg: "teal.400" }}
          >
            <Icon as={FaDatabase} p="4" w="24" h="24" color="black" />
            <Text color="black" p="4" fontSize="xl" fontWeight="bold">
              Business Solution
            </Text>
            <Text color="black" p="4" fontSize="md" fontWeight="semibold">
              Deployment High available IT infrastructure
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="27vh"
            w="27vh"
            justify="flex-end"
            _hover={{ bg: "cyan.400" }}
          >
            <Icon as={MdOutlineSupport} p="4" w="24" h="24" color="black" />
            <Text color="black" p="4" fontSize="xl" fontWeight="bold">
              Live Support
            </Text>
            <Text color="black" p="4" fontSize="md" fontWeight="semibold">
              Top level products & solutions with customization
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="27vh"
            w="27vh"
            justify="flex-end"
            _hover={{ bg: "green.400" }}
          >
            <Icon
              as={MdOutlineSupportAgent}
              p="4"
              w="24"
              h="24"
              color="black"
            />
            <Text color="black" p="4" fontSize="xl" fontWeight="bold">
              Analytics
            </Text>
            <Text color="black" p="4" fontSize="md" fontWeight="semibold">
              On-demand 24X7 techsupport for your IT
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
export default Card2;
