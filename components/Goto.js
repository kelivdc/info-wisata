import { Link, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import NextLink from "next/link"

function Goto({url, anchor}) {    
  return (            
        <NextLink href={url} passHref>
            <Link p={2}>{anchor}</Link>
        </NextLink>  
  )
}

export const Nav = ({url, anchor}) => {    
    const bgBox = useColorModeValue('blue.400','gray.600')
    return (            
            <NextLink href={url} passHref>
                <Link p={2} _hover={{bg: bgBox}}>{anchor}</Link>
            </NextLink>  
    )
    }


export default Goto
