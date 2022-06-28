import React from 'react'
import Frontend from '../../components/Frontend'
import { TimeIcon } from "@chakra-ui/icons";

import { Box, Container, Flex, Heading, useColorModeValue, Link, Stack, VStack, Text, Center, Divider } from "@chakra-ui/react";
import Image from "next/image";
import zebraPic from "/public/img/zebra.jpg"
import gajahPic from "/public/img/gajah.jpg"

function Slug() {
    const metadata = {
        title: 'Slug',
        description: 'Description'
    }
    const bgBox = useColorModeValue('gray.100','gray.700')
    const bgTerbaru = useColorModeValue('white','gray.500')
    const textColor = useColorModeValue('gray.800','gray.200')     
    const bgMenarik = useColorModeValue('gray.300','gray.800')

    return (
        <Frontend metadata={metadata}>           
            <Box bg={bgBox} py={4}>          
                <Container maxW="1040px" p="0">
                <Heading as="h1" fontSize="xl" py={2}>Category</Heading>
                <Flex direction={["column", "row"]} mx="auto">              
              <VStack w={["100%","67%"]} bg={bgTerbaru} p={4} gap={4}>
                {[...Array(4)].map((x, i) =>
                <Stack direction={["column", "row"]} w="100%" gap={[0, 4]} key={i}>
                    <Box w={["100%", "35%"]} position="relative">
                    <Image src={gajahPic} layout="responsive" priority />
                    <Box bg="red.600" color="white" fontSize="12px" as="text" rounded={4} p={1} position="absolute" bottom="0" m={2}>Wisata</Box>
                    </Box>
                    <Box w={["100%", "65%"]} color={textColor}>
                    <Heading as="h2" fontSize="20px">Judulnya panjang bro</Heading>
                    <Box pt={2} fontSize="sm">
                        <TimeIcon /> 2 hari yang lalu
                    </Box>
                    <Text as="p" pt={2} noOfLines={2}>Culpa irure reprehenderit velit aute nulla esse. Officia do officia aute deserunt aute. Culpa et do ad do amet excepteur duis eiusmod sit eiusmod adipisicing enim voluptate. Fugiat excepteur mollit id labore ut commodo exercitation eiusmod. Lorem labore officia fugiat magna deserunt enim minim aliquip exercitation. Ullamco culpa proident magna Lorem ea pariatur et voluptate veniam ullamco sit. Voluptate Lorem commodo cillum ea proident est nulla id.
                        Ullamco ut veniam qui non Lorem nostrud. Qui esse tempor ut id occaecat nisi ut. Voluptate eiusmod irure quis consectetur. Nisi culpa Lorem pariatur non duis esse mollit irure ex velit quis proident. Cupidatat irure ea id voluptate proident commodo. Anim dolor dolor tempor adipisicing irure deserunt eu reprehenderit exercitation sunt et enim et veniam.
                        Qui cillum eu dolore voluptate commodo nisi cupidatat pariatur do. Deserunt nostrud Lorem cillum magna ut sint. Ut tempor aliquip consequat occaecat sint occaecat cillum excepteur. Elit culpa eu elit voluptate. Tempor aliqua anim Lorem reprehenderit labore fugiat mollit ut ad ut laborum in cupidatat. Duis culpa duis ullamco consequat veniam in fugiat ad voluptate proident voluptate nulla labore.
                    </Text>
                    </Box>
                </Stack>
                )}
                </VStack>
                <Stack bg={bgMenarik} w={["100%", "33%"]}>
                  <Heading as="h2" fontSize={["xl", "2xl"]} color="blue.500" p={4}>Menarik</Heading>
                  {[...Array(10)].map((x, i) =>
                      <Box  key={i}>
                      <Flex gap="30px" w="100%" px={2}>
                          <Box w="5%" my="auto">
                          <Center bg="gray.500" px={4} py={1} rounded={20}>{i}</Center>
                          </Box>
                          <Box w="95%">
                          <Text noOfLines={3} fontSize="sm" lineHeight="1.2rem">Commodo do culpa aute ipsum sit consectetur ut nostrud enim enim officia occaecat nostrud. </Text>
                          </Box>
                      </Flex>
                      <Divider />                  
                      </Box>
                  )}
                </Stack>
            </Flex>
                </Container>
            </Box>
        </Frontend>
    )
}

export default Slug