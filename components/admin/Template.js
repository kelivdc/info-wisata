import { Box, Flex, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import Head from "next/head"
import Sidebar from './Sidebar'
import Content from './Content'

function Template({children, title}) {
    const bgColor = useColorModeValue("gray.100", "gray.600")
    return (
        <>
            <Head>
                <title>{title || 'Kosong'}</title>
            </Head>
            <Flex direction={"row"} bg={bgColor} fontSize="sm">
                <Sidebar />
                <Content>{children}</Content>
            </Flex>
        </>
    )
}

export default Template