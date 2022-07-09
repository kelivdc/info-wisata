import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Table,
  TableContainer,
  Text,
  Thead,
  Th,
  Tr,
  Tbody,
  Td,
  Flex,
  Box,
  Button,
  Input,
  Select,
  HStack,
  IconButton,
  Tooltip, 
  InputGroup,  
  InputRightElement,
  FormControl,
  useDisclosure
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Create from "../../components/admin/modal/category/Create";
import Panel from "../../components/admin/Panel";
import Template from "../../components/admin/Template";

function Search() {
    console.log('Search')
}

function Category() {
    const [message, setMessage] = useState('')    
    const modal_create = useDisclosure()
    const top_button = (
        <Button onClick={modal_create.onOpen} size="sm" colorScheme={"green"} leftIcon={<AddIcon />}>Create</Button>
    )
  
    const submit = (event) => {
        if (event.keyCode == 13) {
            Search();
        }
    }
  return (
    <Template title="Category">
      <Create modal_name={modal_create} />
      <Panel title="Category" top_button={top_button}>
        <Box my={4}>
            {message}
        </Box>
        <Flex justifyContent={"space-between"}>
          <HStack>
            <Text>Search</Text>
            <FormControl>
                <InputGroup size="md">
                <Input type="text" placeholder="keyword" rounded={"sm"} onKeyDown={(e) => submit(e)} />
                <InputRightElement>
                    <IconButton size="sm" icon={<FaSearch />} onClick={Search()}/>
                </InputRightElement>
                </InputGroup>
            </FormControl>
          </HStack>
          <Box>Total: 25 entries</Box>
        </Flex>
        <TableContainer my={4}>
          <Table
            variant="striped"
            border={"1px"}
            borderColor="gray.200"
            size="sm"
            p={0}
          >
            <Thead borderBottom={"2px"} borderColor={"gray.300"}>
              <Tr>
                <Th w="1%" py={2}>Id</Th>
                <Th>Name</Th>
                <Th>Slug</Th>
                <Th>Sort</Th>
                <Th>Publish</Th>
                <Th textAlign={"center"}>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {[...Array(10)].map((x, i) => (
                <Tr key={i} py="0" size="sm">
                  <Td>{i}</Td>
                  <Td>Wisata</Td>
                  <Td>wisata</Td>
                  <Td>10</Td>
                  <Td>True</Td>
                  <Td textAlign={"center"}>
                    <Tooltip label="Edit">
                      <IconButton
                        icon={<EditIcon />}
                        size="sm"
                        colorScheme="green"
                      />
                    </Tooltip>
                    <Tooltip label="Delete">
                      <IconButton
                        ml="5px"
                        icon={<DeleteIcon />}
                        size="sm"
                        colorScheme="red"
                      />
                    </Tooltip>               
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <Flex justifyContent={"space-between"}>
          <HStack>
            <Box>Show</Box>{" "}
            <Select w="80px">
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
  );
}

export default Category;
