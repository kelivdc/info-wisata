import React from 'react'
import { 
    Box, 
    Spacer, 
    Link, 
    IconButton, 
    Flex,
    Center, 
    Text,
    useColorMode, 
    HStack, 
    useDisclosure, 
    Drawer, 
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    VStack,
    Heading,
    Input,
    InputGroup,
    InputRightElement
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { SunIcon, HamburgerIcon, SearchIcon, MoonIcon } from '@chakra-ui/icons'

function Topbar() {
    const { colorMode, toggleColorMode } = useColorMode()
    const today = new Date()
    const tanggal = today.toLocaleDateString('id-ID', {day: 'numeric', month: 'long', year: 'numeric'})
    const {isOpen, onOpen, onClose} = useDisclosure()
    const btnRef = React.useRef()    
    // const searchBg = props.colorMode === 'dark' ? 'Dark' : 'Light',
    const Goto = ({url, label}) => {
        return (
            <NextLink href={url} passHref>
                <Link w="100%">{label}</Link>
            </NextLink>  
        )
    }
  return (
    <Box px={{base: '5px ', md: '0px'}} py={2}>
        <Flex>
          <Center>
          <NextLink href={'/'} passHref>
            <Link>InfoWisata</Link>
          </NextLink>
          </Center>
          <Spacer />
          <HStack spasing="5px">
            <Center px={2} fontSize="sm">{tanggal}</Center>
            <IconButton size="sm" icon={colorMode == 'light' ? <MoonIcon /> : <SunIcon />} onClick={toggleColorMode}/>
            <IconButton display={{base: "block", md: "none"}} icon={<HamburgerIcon />} onClick={onOpen} />
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <Heading fontSize="xl" py={2} color="gray.500">Navigation</Heading>
                        <VStack spacing={5} mt="10px">
                           <InputGroup>
                            <Input placeholder='Search' />
                            <InputRightElement>
                                <IconButton bg="none" icon={<SearchIcon />} />
                            </InputRightElement>
                           </InputGroup>
                            <Goto url="/" label="Beranda" />
                            <Goto url="/about" label="Tentang" />
                            <Goto url="/contact" label="Hubungi" />
                            <Goto url="/Disclamer" label="Disclamer" />
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
          </HStack>
        </Flex>
    </Box>
  )
}

export default Topbar