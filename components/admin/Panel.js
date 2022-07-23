import { useColorModeValue, Box, Heading, Flex, Button, Icon, IconButton } from '@chakra-ui/react'
import React from 'react'
import { FaPlus } from 'react-icons/fa'

function Panel({children, title, top_button}) {
    const bgBox = useColorModeValue("white", "gray.300")
    const textColor = useColorModeValue("gray.500", "gray.600")
    const bgPanel = useColorModeValue("white", "gray.600")
    const textPanel = useColorModeValue("gray.500", "gray.300")
    const bgHeader = useColorModeValue('#f8f9fc', 'gray.500')
    const textHeader = useColorModeValue('#4e73df','gray.200')
  return (
    <Box bg={bgBox} border={"1px"} borderColor="gray.200" shadow="xl" rounded="md" >
        <Box px={4} py={2} bg={bgHeader} roundedTop={"md"} color={textColor} borderBottom={"1px"} borderColor="gray.200">
          <Flex justifyContent={"space-between"} alignItems="center">
            <Heading fontSize="16px" fontWeight={"bold"} color={textHeader}>{title || ''}</Heading>
            {top_button}
          </Flex>
        </Box>
        <Box p={4} bg={bgPanel} color={textPanel} roundedBottom={"md"}>
          {children}
        </Box>
    </Box>
  )
}

export default Panel