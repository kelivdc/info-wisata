import React from 'react'
import { Box, Center, Container, Flex, IconButton, Spacer, useColorModeValue, Text, Link } from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from './Navbar'
import Topbar from './Topbar'
import Footer from './Footer'

function Frontend({children, metadata, categories}) {  
  const meta = {
    title: metadata.title?? 'Hello',
    description: metadata.description?? '',
    robots: metadata.robots?? ''
  }
  const bgBox = useColorModeValue('blue.600','blue.700')
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="robots" content={meta.robots} />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      </Head>
      <Container maxW='1040px' p="0">          
        <Topbar />
        <Navbar />
      </Container>      
      {children}
      <Box bg={bgBox}>
        <Container maxW='1040px' p="0">          
          <Footer />  
        </Container>
      </Box>  
    </>
  )
}

export default Frontend