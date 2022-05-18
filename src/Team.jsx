import {
    Stack,
    useMediaQuery,
    Flex,
    Text,
    useColorMode,
    Box,
  } from "@chakra-ui/react";




function Home() {
    const { colorMode } = useColorMode();
    const isDark = colorMode == "dark";
    const { isNotSmallerScreen } = useMediaQuery("(min-width:600px)");

    return(

    )
}    