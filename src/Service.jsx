import {
  Flex,
  Box,
  Text,
  Icon,
  useMediaQuery,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { BsFileBarGraphFill } from "react-icons/bs";
import { ImRocket } from "react-icons/im";
import { RiUploadCloudFill } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa";
import { MdOutlineSupport, MdOutlineSupportAgent } from "react-icons/md";
import { IoAppsSharp } from "react-icons/io5";

function Service() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <VStack>
      <Flex
        alignSelf="center"
        direction={isNotSmallerScreen ? "row" : "column"}
        p={isNotSmallerScreen ? "32" : "0"}
      >
        <Box align="center">
          <Text
            fontSize="6xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            Service we offer
          </Text>
          <Text fontSize="2xl" fontWeight="semibold">
            We offer only the things, in which we have expertise
          </Text>
        </Box>
      </Flex>
    </VStack>
  );
}

export default Service;
