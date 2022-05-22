import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Heading, Text, SimpleGrid, VStack } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import { AiOutlineCloudUpload } from "react-icons/ai";
import { BsFileBarGraphFill } from "react-icons/bs";
import { ImRocket } from "react-icons/im";
import { IoAppsSharp } from "react-icons/io5";
import { RiUploadCloudFill } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa";
import { MdOutlineSupport, MdOutlineSupportAgent } from "react-icons/md";

function Card1() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");


    return (

      <VStack><SimpleGrid minChildWidth='1100px' spacing='40px'>
      <Box  height='240px'><Flex direction={isNotSmallerScreen ? "row" : "column"}>
            <Flex
              rounded="xl"
              direction="column"
              mt={4}
              bg="blue.400"
              h="27vh"
              w="27vh"
              justify="flex-end"
            >
              <Icon
                color="white"
                p="4"
                as={AiOutlineCloudUpload}
                w="24"
                h="24"
              />
              <Text color="white" p="4" fontSize="xl" fontWeight="bold">
                Cloud Apps
              </Text>
              <Text color="white" p="4" fontSize="md" fontWeight="semibold">
                Automate your work & Deploy on Cloud
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
              <Icon color="black" p="4" as={IoAppsSharp} w="24" h="24" />
              <Text color="black" p="4" fontSize="xl" fontWeight="bold">
                Mobility
              </Text>
              <Text color="black" p="4" fontSize="md" fontWeight="semibold">
                Use your Application from anywhere
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
              <Icon as={BsFileBarGraphFill} p="4" w="24" h="24" color="black" />
              <Text color="black" p="4" fontSize="xl" fontWeight="bold">
                Analytics
              </Text>
              <Text color="black" p="4" fontSize="md" fontWeight="semibold">
                Decommission of data & Visualization for BI
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
              <Icon as={ImRocket} p="4" w="24" h="24" color="black" />
              <Text color="black" p="4" fontSize="xl" fontWeight="bold">
                Digital Media
              </Text>
              <Text color="black" p="4" fontSize="md" fontWeight="semibold">
                Make your Brand in Social & Digital world
              </Text>
            </Flex>
          </Flex></Box>
      <Box height='240px'><Flex direction={isNotSmallerScreen ? "row" : "column"}>
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
                  <Icon
                    as={RiUploadCloudFill}
                    p="4"
                    w="24"
                    h="24"
                    color="ehite"
                  />
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
                  <Icon
                    as={MdOutlineSupport}
                    p="4"
                    w="24"
                    h="24"
                    color="black"
                  />
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
              </Flex></Box>
      </SimpleGrid></VStack>

    )
    
}      
export default Card1;