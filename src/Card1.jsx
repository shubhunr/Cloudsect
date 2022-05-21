import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import { AiOutlineCloudUpload } from "react-icons/ai";
import { BsFileBarGraphFill } from "react-icons/bs";
import { ImRocket } from "react-icons/im";
import { IoAppsSharp } from "react-icons/io5";

function Card1() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");


    return (
        <Flex  alignSelf="center"
        
        p={isNotSmallerScreen ? "32" : "0"}
      direction={isNotSmallerScreen ? "row" : "column"} w="100%"
            maxWidth={{ base: "100vh", md: "130vh", md: "130vh", xl: "130vh" }}>
            <Box alignSelf="center" px="25%" >
                <Flex direction={isNotSmallerScreen ? "row" : "column"}  >
                    <Flex rounded="xl" direction="column"mt={4} bg="blue.400" h="27vh" w="27vh" justify="flex-end">
                        <Icon color="white" p="4" as={AiOutlineCloudUpload} w="24" h="24" />
                        <Text color="white" p="4" fontSize="xl" fontWeight="bold">
                          Cloud Apps
                        </Text>
                        <Text color="white" p="4" fontSize="md" fontWeight="semibold">
                           Automate your work & Deploy on Cloud
                        </Text>
                    </Flex>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="27vh" w="27vh" justify="flex-end" _hover={{ bg: "teal.400", }}>
                        <Icon color="black" p="4" as={IoAppsSharp} w="24" h="24" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="bold">
                          Mobility
                        </Text>
                        <Text color="black" p="4" fontSize="md" fontWeight="semibold">
                          Use your Application from anywhere
                        </Text>
                    </Flex>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="27vh" w="27vh" justify="flex-end"
                        _hover={{ bg: "cyan.400", }} >
                        <Icon as={BsFileBarGraphFill} p="4" w="24" h="24" color="black" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="bold">
                        Analytics
                        </Text>
                        <Text color="black" p="4" fontSize="md" fontWeight="semibold">
                          Decommission of data & Visualization for BI
                        </Text>
                    </Flex>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="27vh" w="27vh" justify="flex-end"
                        _hover={{ bg: "green.400", }} >
                        <Icon as={ImRocket} p="4" w="24" h="24" color="black" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="bold">
                        Digital Media
                        </Text>
                        <Text color="black" p="4" fontSize="md" fontWeight="semibold">
                        Make your Brand in Social & Digital world
                        </Text>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    )
    
}      
export default Card1;