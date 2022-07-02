import React from 'react'
import { Box, Divider, Heading, useColorModeValue, Flex, VStack } from '@chakra-ui/react'
import { FaHome, FaFileAlt, FaCopy, FaTrademark, FaBahai, FaCrosshairs, FaBookReader } from "react-icons/fa"
import Navmenu from './Navmenu';

// https://react-icons.github.io/react-icons/icons?name=fa
function Sidebar() {
  const bgColor = useColorModeValue('#4e73df', "blue.800") 
  const navColor = useColorModeValue('gray.300', 'gray.300')
  return (
    <Flex direction={"column"} w="14.5rem" bg={bgColor} minHeight={"100vh"} px={4} color={navColor}>
        <Flex height={"4.375rem"} justifyContent="center" alignItems="center">
            <Heading fontSize={"xl"} textAlign="center" color={"white"} letterSpacing={"2px"}>CMS</Heading>
        </Flex>
        <Divider orientation='horizontal' opacity={"0.2"} />
           <Box py={4}><Navmenu icon={<FaHome />} url="dashboard" label="Dashboard" /></Box>
        <Divider orientation='horizontal' opacity={"0.2"} />
        <VStack pt={10} w={"full"} alignItems="left" gap={4}>
            <Navmenu icon={<FaFileAlt />} url="post" label="Post" />            
            <Navmenu icon={<FaCopy />} url="category" label="Category" />            
            <Navmenu icon={<FaBahai />} url="trending" label="Trending" />            
            <Navmenu icon={<FaCrosshairs />} url="pilihan" label="Pilihan" />            
            <Navmenu icon={<FaBookReader />} url="menarik" label="Info Menarik" />            
        </VStack>
    </Flex>
  )
}

export default Sidebar