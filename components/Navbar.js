import React from 'react'
import { HStack, Box, Spacer, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

const Goto = ({url, label}) => {
    return (
        <NextLink href={url} passHref>
            <Link p={2} _hover={{bg: "blue.200"}}>{label}</Link>
        </NextLink>  
    )
}

function Navbar() {
  return (
    <Box bg='blue.600' color='white' px={{base: '5px ', md: '15px'}}>
        <HStack spacing="5px" overflowX="auto" scrollBehavior="none">           
            <Goto url="/wisata" label="Wisata" />
            <Goto url="/cafe" label="Cafe" />
            <Goto url="/pegunungan" label="Pegunungan" />            
        </HStack>
    </Box>
  )
}

export default Navbar