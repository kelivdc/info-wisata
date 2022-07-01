import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  InputRightElement,
  InputGroup,
  Input,
  Button,
  VStack,
  Checkbox,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

import { HiEye, HiEyeOff, HiOutlineUser } from "react-icons/hi";
import Image from "next/image";
import bgImage from "/public/img/white-bg.jpg";
import Head from "next/head";
import Goto from "/components/Goto";
import { useRouter } from "next/router";

function Login() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const router = useRouter();
  const bgLogin = useColorModeValue('white','gray.700')
  const bgBack = useColorModeValue("0.5", "0.9")
  const textColor = useColorModeValue("gray.500", "white")
  return (
    <>
      <Head>
        <title>Admin - login</title>
      </Head>
      <Flex bg="gray.100" height={"100vh"}>
        <Image src={bgImage} layout="fill" objectFit="cover" alt="" />
        <Box
          bg="black"
          height={"100vh"}
          position={"absolute"}
          overflow="hidden"
          width="full"
          opacity={bgBack}
          top={"0"}
          left={"0"}
        ></Box>
        <Box
          position="absolute"
          overflow="hidden"
          bottom="0"
          left="0"
          p={4}
          color="white"
          w="full"
          h="100vh"
        >
          <Flex
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            position={"relative"}
            height="100vh"
          >
            <Box bg={bgLogin} p={8} rounded={4} shadow="md" w="380px" mb={20}>
              <Heading fontSize={"xl"} textAlign="center">
                Login
              </Heading>
              <VStack spacing={4} py={8} align="stretch">
                <InputGroup>
                  <Input type="email" placeholder="Email" variant="outline" color="gray.500" />
                  <InputRightElement width="4.5rem">
                    <HiOutlineUser />
                  </InputRightElement>
                </InputGroup>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                    variant="outline"
					color="gray.500"
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={handleClick}
                    >
                      {show ? <HiEye /> : <HiEyeOff />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Checkbox color={textColor}>Remember password</Checkbox>
              </VStack>
              <Flex justifyContent={"space-between"}>
                <Goto url="/forgot"><Link color={textColor}>Forgot password ?</Link></Goto>
                <Button
                  colorScheme="linkedin"
                  size="md"
                  float={"right"}
                  onClick={() => router.push(`${process.env.admin}/dashboard`)}
                >
                  Login
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}

export default Login;
