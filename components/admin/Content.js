import { Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import Topbar from './Topbar'

function Content({children}) {
  return (
    <>
      <Flex direction={"column"} w="full">
          <Topbar />
          <Box p={8}>{children}</Box>
      </Flex>
    </>
  )
}

export default Content