<>
      <Flex alignSelf="center">
        <Box width="1000px" align="center">
          <Text
            fontSize="6xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
            mt="10%"
          >
            Service we offer
          </Text>
          <Text fontSize="2xl" fontWeight="semibold">
            We offer only the things, in which we have expertise{" "}
          </Text>
        </Box>
      </Flex>

      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        w="100%"
        maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
      >
        <Box alignSelf="center" px="32" py="16">
          <Flex direction={isNotSmallerScreen ? "row" : "column"}>
            <Flex
              rounded="xl"
              direction="column"
              mt={4}
              bg="blue.400"
              h="25vh"
              w="20vh"
              justify="center"
            >
              <Icon as={AiOutlineCloudUpload} boxSize="50px" />
              <Text fontSize="2xl" fontWeight="bold">
                Cloud Apps
              </Text>
              <Text fontWeight="semibold">
                Automate your work & Deploy on Cloud
              </Text>
            </Flex>
            <Flex
              rounded="xl"
              direction="column"
              mt={4}
              bg="blue.400"
              h="25vh"
              w="20vh"
              justify="center"
            >
              <Icon as={IoAppsSharp} boxSize="50px" />
              <Text fontSize="2xl" fontWeight="bold">
                Mobility
              </Text>
              <Text>Use your Application from anywhere</Text>
            </Flex>
            <Flex
              rounded="xl"
              direction="column"
              mt={4}
              bg="blue.400"
              h="25vh"
              w="20vh"
              justify="center"
            >
              <Icon as={BsFileBarGraphFill} boxSize="50px" />
              <Text fontSize="2xl" fontWeight="bold">
                Analytics
              </Text>
              <Text>Decommission of data & Visualization for BI</Text>
            </Flex>
            <Flex
              rounded="xl"
              direction="column"
              mt={4}
              bg="blue.400"
              h="25vh"
              w="20vh"
              justify="center"
            >
              <Icon as={ImRocket} boxSize="50px" />
              <Text fontSize="2xl" fontWeight="bold">
                Digital Media
              </Text>
              <Text>Make your Brand in Social & Digital world</Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>

      <Flex direction={isNotSmallerScreen ? "row" : "column"}>
        <Flex
          rounded="xl"
          direction="column"
          mt={4}
          bg="blue.400"
          h="25vh"
          w="20vh"
          justify="center"
        >
          <Icon as={RiUploadCloudFill} boxSize="50px" />
          <Text fontSize="2xl" fontWeight="bold">
            Cloud Backup
          </Text>
          <Text>Protect your data on cloud with Realtime sync</Text>
        </Flex>
        <Flex
          rounded="xl"
          direction="column"
          mt={4}
          bg="blue.400"
          h="25vh"
          w="20vh"
          justify="center"
        >
          <Icon as={FaDatabase} boxSize="50px" />
          <Text fontSize="2xl" fontWeight="bold">
            Data Center
          </Text>
          <Text>Deployment High available IT infrastructure </Text>
        </Flex>
        <Flex
          rounded="xl"
          direction="column"
          mt={4}
          bg="blue.400"
          h="25vh"
          w="20vh"
          justify="center"
        >
          <Icon as={MdOutlineSupport} boxSize="50px" />
          <Text fontSize="2xl" fontWeight="bold">
            Business Solution
          </Text>
          <Text>Top level products & solutions with customization</Text>
        </Flex>
        <Flex
          rounded="xl"
          direction="column"
          mt={4}
          bg="blue.400"
          h="25vh"
          w="20vh"
          justify="center"
        >
          <Icon as={MdOutlineSupportAgent} boxSize="50px" />
          <Text fontSize="2xl" fontWeight="bold">
            Live Support
          </Text>
          <Text>On-demand 24X7 techsupport for your IT</Text>
        </Flex>
      </Flex>
    </>









<div className="contact_info">
             <div className="container-fluid">
                 <div className="row">
                     <div className="col-lg-10 offset-lg-1">
                         <Icon as={FaPhoneAlt} />
                         <div className="contact-info-content">
                             <div className="contact_info-title">
                                Phone
                             </div>
                             <div className="contact_info_text">
                             +91 81888 89555
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>









<Router>
<Routes>
  <Route exact path="/" element={<Home/>} />
  <Route path="/about" element={<About/>} />
  <Route path="/team" element={<Team/>} />
  <Route path="/service" element={<Service/>} />
  <Route path="/blog" element={<Blog/>} />
  <Route path="/contact" element={<Contact/>} />
</Routes>
</Router>