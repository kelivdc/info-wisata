import React, { useEffect, useState } from 'react'
import { 
    HStack, 
    Box, 
    Link, 
    useColorModeValue, 
    Image, Flex, 
    Center, 
    Spacer, 
    IconButton, 
    Popover, 
    PopoverTrigger, 
    Portal, 
    PopoverContent,
    PopoverArrow,
    Input,
    InputGroup,
    InputRightElement
 } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import {Nav} from "./Goto"

function Navbar() {
  const bgBox = useColorModeValue('blue.600','blue.700');      
  return (
    <>
    <Box bg={bgBox} color='white' px={['5px ', '15px']}>        
        <Flex>            
            <Box>         
                <HStack spacing="5px" overflowX="auto" scrollBehavior="none">
                    <Nav url='/category/wisata' anchor="Wisata" _hover={{bg: bgBox}}/>
                    <Nav url='/category/cafe' anchor="Cafe" _hover={{bg: bgBox}} />
                </HStack>
            </Box>
            <Spacer />            
            <Popover placement="bottom-end">
                <PopoverTrigger>
                    <IconButton bg="none" colorScheme="none" icon={<SearchIcon />} />
                </PopoverTrigger>
                <Portal shadow>
                    <PopoverContent>
                        <PopoverArrow />
                        <Box p={2}>
                        <InputGroup bg="white">
                            <Input placeholder='Search' focusBorderColor="none" _placeholder={{color: "gray.500"}} />
                            <InputRightElement>
                                <IconButton bg="none" icon={<SearchIcon />} />
                            </InputRightElement>
                           </InputGroup>
                        </Box>
                    </PopoverContent>
                </Portal>
            </Popover>
        </Flex>
    </Box>
    <Center my="10px">
        <Image src="/img/top-image.jpeg" alt="Top Image" />
    </Center>
    </>
  )
}

export default Navbar