import React from 'react'
import { Box, Center, Container, Flex, IconButton, Spacer, useColorMode, Text, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { SunIcon } from '@chakra-ui/icons'
import Head from 'next/head'
import Navbar from './Navbar'
import Topbar from './Topbar'
import Footer from './Footer'

function Frontend({children, metadata}) {  
  const meta = {
    title: metadata.title?? 'Hello',
    description: metadata.description?? '',
    robots: metadata.robots?? ''
  }
  
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
      <Footer />    
    </>
  )
}

export default Frontend