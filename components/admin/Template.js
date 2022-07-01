import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Head from "next/head"

function Template({children, title}) {
    return (
        <>
            <Head>
                <title>{title || 'Kosong'}</title>
            </Head>
            <Flex direction={"row"}>
                <Box w="18%" bg="blue.600" h={"100vh"}>A</Box>
                <Box w="82%">B</Box>
            </Flex>
        </>
    )
}

export default Template