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




<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#26C6DA" fill-opacity="1" d="M0,224L1440,32L1440,0L0,0Z"></path></svg>



<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#26C6DA" fill-opacity="1" d="M0,32L480,288L960,224L1440,32L1440,320L960,320L480,320L0,320Z"></path>
</svg>










<Heading ml="8" size="xl" color="cyan.400" alignSelf="center" fontWeight="bold">Cloudsect</Heading>
          <Spacer></Spacer>
        <Button ml={8} colorScheme="blue" variant="link" >
          HOME
        </Button>
        <Button ml={8} colorScheme="blue" variant="link">
          ABOUT
        </Button>
        <Button ml={8} colorScheme="blue" variant="link">
          TEAM
        </Button>
        <Button ml={8} colorScheme="blue" variant="link">
          SERVICE
        </Button>
        <Button ml={8} colorScheme="blue" variant="link">
          PORTFOLIO
        </Button>
        <Button ml={8} colorScheme="blue" variant="link">
          B2B
        </Button>
        <Button ml={8} colorScheme="blue" variant="link">
          BLOG
        </Button>
        <Button ml={8} colorScheme="blue" variant="link">
          CONTACT
        </Button>
        <Spacer></Spacer>
          <IconButton
          icon={<FaLinkedin />}
          isRound="true"
          onClick={toggleColorMode}
          alignSelf="center"
          
        ></IconButton>
        <IconButton
          ml={2}
          icon={<FaInstagram />}
          isRound="true"
          onClick={toggleColorMode}
          alignSelf="center"
          
        ></IconButton>
        <IconButton
          ml={2}
          icon={<FaGithub />}
          isRound="true"
          onClick={toggleColorMode}
          alignSelf="center"
          mr={8}
        ></IconButton>
          <IconButton mr ="8" icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode} alignSelf="center"></IconButton>