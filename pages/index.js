import { TimeIcon } from "@chakra-ui/icons";
import { Box, Container, Flex, Heading, Image, useColorModeValue, Link, Stack, Skeleton } from "@chakra-ui/react";
import Frontend from "../components/Frontend";
import Terbaru from "../components/Terbaru";
import NextLink from 'next/link'

export default function Home() {
  const metadata = {
    title: 'Selamat Datang',
    description: 'Website paling keren',
    robots: 'index, follow'
  }
    const bgBox = useColorModeValue('gray.100','gray.700')
    
  return (    
      <Frontend metadata={metadata}>        
        <Box bg={bgBox} py={4}>
          <Container maxW="1040px" p="0">
            <Flex direction={{base: "column", md: "row"}} gap={{base: 2, md: 8}} p={2} mx="auto">
                <Box w={{base: "100%", md: "60%"}} position="relative">
                  <Skeleton height="100%" isLoaded>
                    <Image src="/img/zebra.jpg" rounded={8} />                
                  </Skeleton>
                  <Box position="absolute" overflow="hidden" top="0" left="0" h="100%" w="100%" bg="#000" opacity="0.4" rounded={8} />
                  <Box position="absolute" overflow="hidden" bottom="0" left="0" p={4} color="white">
                    <Box bg="red" color="white" fontSize="12px" as="text" rounded={4} p={1}>Wisata</Box>
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
            <Flex direction={{base: "column", md: "row"}} gap={{base: 2, md: 8}} p={2} mx="auto">
              <Stack>
                
              </Stack>
            </Flex>
          </Container>         
        </Box>
      </Frontend>       
  )
}
