import React from 'react'
import { Box, useColorModeValue, Heading, VStack, Flex, Image, Text } from '@chakra-ui/react'
import { TimeIcon } from '@chakra-ui/icons';

function Terbaru() {
    const bgTerbaru = useColorModeValue('gray.600','gray.800')
    return (
        <Box bg="black" rounded={4} p={4} color="white">
            <Heading as="h2" fontSize="lg" mb={4}>Info terbaru</Heading>
            <VStack spacing="30px" fontSize="sm" color="gray.200">
                {[...Array(3)].map((x, i) =>
                <Flex w="100%" gap="2" key={i}>
                    <Box w="75%">
                        <Box fontWeight="bold">
                        <Text noOfLines={2}>Xiaomi Akan Hadirkan 3 Smartphone Terbaru Dengan Dukungan Snapdragon 888!
                        </Text> 
                        </Box>
                        <Box color="#" mt={3}>
                            <TimeIcon /> 1 hari yang lalu
                        </Box>                 
                    </Box>
                    <Box w="25%">
                        <Image src="/img/xiaomi.jpg" alt="Contoh" />
                    </Box>
                </Flex>     
                )} 
            </VStack>
        </Box>
    )
}

export default Terbaru