import { Box, Flex } from "@chakra-ui/react";
import Frontend from "../components/Frontend";

export default function Home() {
  const metadata = {
    title: 'Selamat Datang',
    description: 'Website paling keren',
    robots: 'index, follow'
  }
  return (
    <Frontend metadata={metadata}>      
      <Flex direction={{base: "column", md: "row"}} gap={{base: 2, md: 8}}>
        <Box w={{base: "100%", md: "70%"}} bg="yellow.200">
          Kiri
        </Box>
        <Box w={{base: "100%", md: "30%"}} bg="red.200">
          Kanan
        </Box>
      </Flex>
    </Frontend>       
  )
}
