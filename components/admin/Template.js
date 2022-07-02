import { Box, Flex, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import Head from "next/head"
import Sidebar from './Sidebar'
import Content from './Content'

function Template({children, title}) {
    const bgColor = useColorModeValue("#f8f9fc", "gray.700")
    return (
        <>
            <Head>
                <title>{title || 'Kosong'}</title>
            </Head>
            <Flex direction={"row"} bg={bgColor}>
                <Sidebar />
                <Content>{children}</Content>
            </Flex>
        </>
    )
}

export default Template