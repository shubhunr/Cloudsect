import React from "react";
import { useMediaQuery, Box, SimpleGrid, Text, Icon, Flex, Heading, Spacer } from "@chakra-ui/react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  const breakpoints = ['0em', '30em', '48em', '62em', '80em', '96em']

  return (
    <>
      <>
        <SimpleGrid minChildWidth="120px" spacing="40px" bg="cyan.400">
          <Box bg="cyan.400" height="300px" p="50px" height="300px">
            <Text fontSize="5xl" fontWeight="bold">
              Cloudsect
            </Text>
          </Box>
          <Box bg="cyan.400" height="300px" p="50px">
            <Text fontSize="2xl" fontWeight="bold">
              Operation Offices:
            </Text>
            <Text>
              STPI-Incubation Center,
              <br />
              UPTRON Building, <br />
              Lucknow, 226010
            </Text>
            <br />
            <Text>
              1st Floor, Vineeta Tower,
              <br /> Pakkapul Bandha Road,
              <br /> Triveni nagar III, Lucknow,
              <br /> Uttar Pradesh, 226020 India
            </Text>
          </Box>
          <Box bg="cyan.400" height="300px" p="50px">
            <Text fontSize="2xl" fontWeight="semibold">
              Promotion Office:
            </Text>
            <Text>
              60, JDBSS, SB Patel Marg,
              <br />
              Santacruz ( W ), Mumbai, <br /> Maharastra 400054, India
            </Text>
          </Box>
          <Box bg="tomato" height="300px" p="50px">
            <Icon as={FaPhoneAlt} boxSize="20px" />
            <Text fontWeight="bold">Phone:</Text><Text> +91 81888 89555</Text>
            
            <Icon as={MdEmail} boxSize="20px" />
            <Text fontWeight="bold">
              E-Mail </Text><Text fontWeight="semibold">Contact</Text><Text> contact@cloudsect.com </Text><Text fontWeight="semibold">Sales: </Text><Text>sales@cloudsect.com
            </Text>
          </Box>
          <Box bg="cyan.400" height="300px"></Box>
        </SimpleGrid><hr />
        <Flex bg="cyan.400" p="5px"><Text fontSize="md" ml="5px">Copyright Cloudsect © 2022 All rights reserved</Text><Spacer></Spacer><Heading size="md" fontWeight="semibold" mr="50px">Designed and developed by <b>Shubham Roy</b></Heading></Flex>
      </>
    </>
  );
};

export default Footer;
