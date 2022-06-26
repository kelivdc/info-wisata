import { TimeIcon } from "@chakra-ui/icons";
import { Box, Container, Flex, Heading, useColorModeValue, Link, Stack, VStack, Text, color } from "@chakra-ui/react";
import Frontend from "../components/Frontend";
import Terbaru from "../components/Terbaru";
import NextLink from 'next/link'
import Image from "next/image";
import zebraPic from "../public/img/zebra.jpg"
import gajahPic from "../public/img/gajah.jpg"

export default function Home() {
  const metadata = {
    title: 'Selamat Datang',
    description: 'Website paling keren',
    robots: 'index, follow'
  }
    const bgBox = useColorModeValue('gray.100','gray.700')
    const bgTerbaru = useColorModeValue('white','gray.500')
    const bgMenarik = useColorModeValue('gray.300','gray.800')
  return (    
      <Frontend metadata={metadata}>        
        <Box bg={bgBox} py={4}>
          <Container maxW="1040px" p="0">
            <Flex direction={{base: "column", md: "row"}} gap={{base: 2, md: 8}} p={2} mx="auto">
                <Box w={{base: "100%", md: "60%"}} position="relative">
                  <Image src={zebraPic}  />                
                  
                  <Box position="absolute" overflow="hidden" top="0" left="0" h="100%" w="100%" bg="#000" opacity="0.4" rounded={8} />
                  <Box position="absolute" overflow="hidden" bottom="0" left="0" p={4} color="white">
                    <Box bg="red.600" color="white" fontSize="12px" as="text" rounded={4} p={1}>Wisata</Box>
                    <NextLink href="/about" passHref>
                      <Link w="100%" _hover={{textDecoration: 'none'}}>
                        <Heading as="h1" color="white" fontSize="2xl" _hover={{color: "blue.300 "}} pt={2}>PUBG Mobile 1,5: Ignition Sudah Bisa Diunduh Oleh Pengguna Android dan iOS!</Heading>
                      </Link>
                    </NextLink>
                    <Box pt={4}>
                      <TimeIcon /> 1 hari yang lalu
                    </Box>
                  </Box>              
                </Box>
              <Box w={{base: "100%", md: "40%"}}>
                <Terbaru />
              </Box>
            </Flex>
            <Flex direction={{base: "column", md: "row"}} p={2} mx="auto">
              <VStack w={{base: "100%", md: "67%"}} bg={bgTerbaru} p={4} gap={4}>
                {[...Array(4)].map((x, i) =>
                <Stack direction={{base: "column", md: "row"}} w="100%" gap={{base: 0, md: 4}} key={i}>
                  <Box w={{base: "100%", md: "45%"}} position="relative">
                    <Image src={gajahPic} />
                    <Box bg="red.600" color="white" fontSize="12px" as="text" rounded={4} p={1} position="absolute" bottom="0" m={2}>Wisata</Box>
                  </Box>
                  <Box w={{base: "100%", md: "55%"}} color="gray.700">
                    <Heading as="h2" fontSize="xl">Judulnya panjang bro</Heading>
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
              <Stack bg={bgMenarik} w={{base: "100%", md:"33%"}} p={4}>
                <Heading as="h2" fontSize={{base: "xl", md: "2xl"}} color="blue.500">Menarik</Heading>
                {[...Array(10)].map((x, i) =>
                <Flex key={i}>
                    Kanan
                </Flex>
                )}
              </Stack>
            </Flex>
          </Container>         
        </Box>
      </Frontend>       
  )
}
