import { Icon, Box, Flex, VStack, useMediaQuery, Text } from "@chakra-ui/react";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <VStack>
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        w="100%" alignSelf="center"
        maxWidth={{ base: "100vh", md: "130vh", md: "130vh", xl: "130vh" }}
      >
        <Box px="32">
          <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
            <Flex
              rounded="xl"
              direction="column"
              mt={4}
              ml={isNotSmallerScreen ? 4 : 0}
              bg="gray.100"
              h="15vh"
              w="35vh"
              justify="flex-end"
              _hover={{ bg: "green.400" }}
              align="center"
            >
              <Icon as={FaPhoneAlt} p="2" w="12" h="12" color="black"></Icon>
              <Text color="black" p="2" fontSize="xl" fontWeight="bold">
                Phone: (+91) 81888 89555
              </Text>
            </Flex>
            <Flex
              rounded="xl"
              direction="column"
              mt={4}
              ml={isNotSmallerScreen ? 4 : 0}
              bg="gray.100"
              h="15vh"
              w="35vh"
              justify="flex-end"
              _hover={{ bg: "teal.400" }}
              align="center"
            >
              <Icon as={MdEmail} p="2" w="12" h="12" color="black"></Icon>
              <Text color="black" p="2" fontSize="xl" fontWeight="bold">
              Contact: contact@cloudsect.com
              </Text>
              <Text color="black" p="2" fontSize="xl" fontWeight="bold">
              Sales: sales@cloudsect.com
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <Flex alignSelf="center">
        <Box boxSize="700px">
          <form>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Full name"
                aria-label="Full name"
              />
            </div>

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Leave your comments here
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                placeholder="Comments"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </Box>
      </Flex>
    </VStack>
  );
};
export default Contact;
