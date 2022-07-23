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
  IconButton,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

import { HiEye, HiEyeOff, HiOutlineUser } from "react-icons/hi";
import Image from "next/image";
import bgImage from "/public/img/white-bg.jpg";
import Head from "next/head";
import Goto from "/components/Goto";
import { useRouter } from "next/router";
import { useColorMode } from "@chakra-ui/react";
import { SunIcon, HamburgerIcon, SearchIcon, MoonIcon } from "@chakra-ui/icons";

function Login() {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const handleClick = () => setShow(!show);
  const router = useRouter();
  const bgLogin = useColorModeValue("white", "gray.700");
  const bgBack = useColorModeValue("0.5", "0.9");
  const textColor = useColorModeValue("#718096", "white");
  const { colorMode, toggleColorMode } = useColorMode();

  const btnLogin = async () => {
    setErrorMsg('')
    const datanya = {
      username: username,
      password: password
    };
    try {
      const res = await fetch ('http://localhost:3000/api/v1/admin/login', {
        method: "POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datanya)
      })      
      const data = await res.json()
      if (!data) {
        setErrorMsg('Cannot connect to server')
      } else {
       if (res.status != 200) {
        setErrorMsg(data.message)
       } else {     
        console.log(data.token)   
       }
      }
    } catch (error) {
      setErrorMsg('Cannot connect to server')
    }          
  }

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
            <Box
              bg={bgLogin}
              p={8}
              rounded={4}
              shadow="md"
              w="380px"
              mb={20}
              position={"relative"}
            >
              <IconButton
                color={textColor}
                icon={colorMode == 'light' ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode}
                position={"absolute"}
                top="0"
                right="0"
                p={2}
				        size="sm"
              />
              <Heading fontSize={"xl"} textAlign="center" color={textColor} mb={4}>
                Login
              </Heading>
              {errorMsg != '' ? (
                <Alert status='error' color={textColor}>
                  <AlertIcon />
                  {errorMsg}
                </Alert>
              ) : ''}
              <VStack spacing={4} py={8} align="stretch">
                <InputGroup>
                  <Input
                    type="email"
                    placeholder="Email/Username"
                    variant="outline"
                    color="gray.500"
                    name="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}                    
                  />
                  <InputRightElement width="3rem">
                    <HiOutlineUser color={textColor} />
                  </InputRightElement>
                </InputGroup>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    name="password"
                    placeholder="Enter password"
                    variant="outline"
                    color={textColor}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                  <InputRightElement width="3rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick} bg={"inherit"} p={0}>
                      {show ? (
                        <HiEye color={textColor}  />
                      ) : (
                        <HiEyeOff color={textColor} />
                      )}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Checkbox color={textColor}>Remember password</Checkbox>
              </VStack>
              <Flex justifyContent={"space-between"}>
                <Goto url="/forgot">
                  <Link color={textColor}>Forgot password ?</Link>
                </Goto>
                <Button
                  colorScheme="blue"
                  size="md"
                  float={"right"}
                  onClick={btnLogin}
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
