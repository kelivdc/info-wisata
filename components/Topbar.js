import React from 'react'
import { Box, Spacer, Link, IconButton, Flex, Center, useColorMode } from '@chakra-ui/react'
import NextLink from 'next/link'
import { SunIcon } from '@chakra-ui/icons'

function Topbar() {
    const { colorMode, toggleColorMode } = useColorMode()
    const today = new Date()
    const tanggal = today.toLocaleDateString('id-ID', {day: 'numeric', month: 'long', year: 'numeric'})
  return (
    <Box px={{base: '5px ', md: '15px'}} py={{base: "10px", md:"15px"}}>
         <Flex>
          <Center>
          <NextLink href={'/'} passHref>
            <Link>InfoWisata</Link>
          </NextLink>
          </Center>
          <Spacer />
          <Flex>
            <Center px={2} fontSize="sm">{tanggal}</Center>
            <IconButton icon={<SunIcon />} onClick={toggleColorMode}/>
          </Flex>
         </Flex>
       </Box>
  )
}

export default Topbar