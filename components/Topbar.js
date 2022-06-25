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
    Heading
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { SunIcon, HamburgerIcon } from '@chakra-ui/icons'

function Topbar() {
    const { colorMode, toggleColorMode } = useColorMode()
    const today = new Date()
    const tanggal = today.toLocaleDateString('id-ID', {day: 'numeric', month: 'long', year: 'numeric'})
    const {isOpen, onOpen, onClose} = useDisclosure()
    const btnRef = React.useRef()    
    const Goto = ({url, label}) => {
        return (
            <NextLink href={url} passHref>
                <Link w="100%" fontSize="xl">{label}</Link>
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
            <IconButton icon={<SunIcon />} onClick={toggleColorMode}/>
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
                        <Heading fontSize="xl" py={2}>Navigation</Heading>
                        <VStack spacing={5} mt="10px">
                            <Goto url="/" label="Home" />
                            <Goto url="/about" label="About" />
                            <Goto url="/contact" label="Contact" />
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