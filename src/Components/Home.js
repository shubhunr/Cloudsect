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
