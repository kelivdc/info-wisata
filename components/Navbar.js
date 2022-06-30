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
import NextLink from 'next/link'
import { SearchIcon } from '@chakra-ui/icons'

const Goto = ({url, label}) => {
    const bgBox = useColorModeValue('blue.400','gray.600')
    return (
        <NextLink href={url} passHref>
            <Link p={2} _hover={{bg: bgBox}}>{label}</Link>
        </NextLink>  
    )
}

function Navbar() {
  const bgBox = useColorModeValue('blue.600','blue.700');     
  const [categories, setCategories] = useState(null);  
    useEffect(() => {
        async function getCategories() {        
            const resp = await fetch(`${process.env.server_api}/api/v1/categories`);
            setCategories(await resp.json());        
        }
        getCategories();
    },[])
  return (
    <>
    <Box bg={bgBox} color='white' px={['5px ', '15px']}>        
        <Flex>            
            <Box>         
                <HStack spacing="5px" overflowX="auto" scrollBehavior="none">
                    {categories?.map((category, i) => 
                        <Goto url={`/category/${category.slug}`} label={category.name} key={i} />
                    )}
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