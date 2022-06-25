import { Box, Container, Flex, Heading, Image, useColorModeValue } from "@chakra-ui/react";
import Frontend from "../components/Frontend";

export default function Home() {
  const metadata = {
    title: 'Selamat Datang',
    description: 'Website paling keren',
    robots: 'index, follow'
  }
    const bgBox = useColorModeValue('gray.100','gray.700')
    const bgTerbaru = useColorModeValue('gray.600','gray.800')
  return (    
      <Frontend metadata={metadata}>        
        <Box bg={bgBox}>
          <Container maxW="1040px" p="0">
          <Flex direction={{base: "column", md: "row"}} gap={{base: 2, md: 8}} p={2} mx="auto">
            <Box w={{base: "100%", md: "60%"}} position="relative">
              <Image src="/img/zebra.jpg" rounded={8} />
              <Box position="absolute" overflow="hidden" top="0" left="0" h="100%" w="100%" bg="#000" opacity="0.4" rounded={8} />
            </Box>        
            <Box w={{base: "100%", md: "40%"}}>
              <Box bg={bgTerbaru} rounded={4} p={4}>
                <Heading as="h2" fontSize="md" color="white">Info terbaru</Heading>
              </Box>
            </Box>
          </Flex>
          </Container>
        </Box>        
      </Frontend>       
  )
}
