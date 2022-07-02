import { Table, TableContainer, Text, Thead, Th, Tr, Tbody, Td, Flex, Box, Input, Select, HStack } from '@chakra-ui/react'
import React from 'react'
import Panel from '../../components/admin/Panel'
import Template from '../../components/admin/Template'

function Category() {
  return (
    <Template title="Category">
      <Panel title="Category">
        <Flex justifyContent={"space-between"}>
            <HStack>
                <Text>Search</Text> <Input type="text" size="sm" placeholder='keyword' rounded={"sm"} />
            </HStack>
            <Box>A</Box>
        </Flex>
        <TableContainer my={4}>
            <Table variant="striped" border={"1px"} borderColor="gray.200">
                <Thead borderBottom={"2px"} borderColor={"gray.300"}>
                    <Tr>
                        <Th>Id</Th>
                        <Th>Name</Th>
                        <Th>Slug</Th>
                        <Th>Sort</Th>
                        <Th>Publish</Th>
                        <Th>Action</Th>
                    </Tr>
                </Thead>
                <Tbody>
                {[...Array(10)].map((x, i) =>                       
                    <Tr>
                        <Td>1</Td>
                        <Td>Wisata</Td>
                        <Td>wisata</Td>
                        <Td>10</Td>
                        <Td>True</Td>
                        <Td>[Edit] [Delete]</Td>
                    </Tr>                
                )}
                </Tbody>
            </Table>
        </TableContainer>
        <Flex justifyContent={"space-between"}>
            <HStack>
            <Box>Show</Box> <Select w="80px">
                <option value="10">10</option>
                <option value="10">25</option>
                <option value="10">50</option>
            </Select>
            <Box>entries</Box>
            </HStack>
            <Box>Pagination</Box>
        </Flex>
      </Panel>
    </Template>
  )
}

export default Category