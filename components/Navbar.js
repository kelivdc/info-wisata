import React from 'react'
import { HStack, Box, Link, useColorModeValue, Image, Flex, Center } from '@chakra-ui/react'
import NextLink from 'next/link'

const Goto = ({url, label}) => {
    const bgBox = useColorModeValue('blue.400','gray.600')
    return (
        <NextLink href={url} passHref>
            <Link p={2} _hover={{bg: bgBox}}>{label}</Link>
        </NextLink>  
    )
}

function Navbar() {
  const bgBox = useColorModeValue('blue.600','blue.700')
  return (
    <>
    <Box bg={bgBox} color='white' px={{base: '5px ', md: '15px'}}>
        <HStack spacing="5px" overflowX="auto" scrollBehavior="none">           
            <Goto url="/wisata" label="Wisata" />
            <Goto url="/cafe" label="Cafe" />
            <Goto url="/pegunungan" label="Pegunungan" />            
        </HStack>
    </Box>
        <Center my="10px">
            <Image src="/img/top-image.jpeg" alt="Top Image" />
        </Center>
    </>
  )
}

export default Navbar