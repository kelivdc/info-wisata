import { Flex, Box, useColorModeValue, Link } from '@chakra-ui/react'
import React from 'react'
import Goto from '../Goto'

function Navmenu({icon, url, label}) {
  const admin = process.env.admin
  const bgHover = useColorModeValue("blue.600", "blue.900")
  return (
        <Goto url={`${admin}/${url}`}>
            <Link style={{ textDecoration: 'none' }}>
                <Flex gap={3} _hover={{bg: bgHover, fontWeight: "bold", color: 'white'}} py={2}>
                    <Box pl={2} mt={"3px"}>{icon}</Box>
                    <Box pr={2}>{label}</Box>
                </Flex>
            </Link>
        </Goto>
  )
}

export default Navmenu