import {
  Icon,
  Box,
  Flex,
  VStack,
  useMediaQuery,
  Text,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <VStack pt="20%">
      <Flex>
        <Box>
          <Text fontSize="6xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text">Contact Us</Text>
        </Box>
      </Flex>
      <Flex alignSelf="center" pt="5%">
        <Box boxSize="700px">
          <Heading fontSize="3xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text">Inquiry Form</Heading><br />
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
