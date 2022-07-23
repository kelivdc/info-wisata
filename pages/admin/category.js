import { AddIcon, ArrowLeftIcon, ArrowRightIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
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
  useDisclosure,
  InputLeftElement,
  Icon
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Create from "../../components/admin/modal/category/Create";
import Panel from "../../components/admin/Panel";
import Template from "../../components/admin/Template";

function Category() {
    const [message, setMessage] = useState('')    
    const [total_entris, set_total_entris] = useState(0)
    const modal_create = useDisclosure()
    const [per_page, set_per_page] = useState(10)
    const [page, setPage] = useState(1)    
    const top_button = (
        <Button onClick={modal_create.onOpen} size="sm" colorScheme={"green"} leftIcon={<AddIcon />}>Create</Button>
    )

    const handlePerpage = (selectedOption) => {
      set_per_page(selectedOption)
    }   
  
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
        <Flex justifyContent={"space-between"} alignItems="center">
          <HStack>
            <Text>Search</Text>
            <FormControl>
                <InputGroup size="md">
                <Input type="text" placeholder="keyword" rounded={"sm"} onKeyDown={(e) => submit(e)} />
                <InputRightElement>
                    <IconButton size="sm" icon={<FaSearch />} />
                </InputRightElement>
                </InputGroup>
            </FormControl>
          </HStack>
          <Box>Total: {total_entris} entries</Box>
        </Flex>
        <TableContainer my={4}>
          <Table
            variant="striped"
            border={"1px"}
            borderColor="gray.200"
            size="sm"
            p={0}
          >
            <Thead borderBottom={"1px"}>
              <Tr borderBottom={"2px"} borderColor="blue.300">
                <Th w="1%" py={2}>Id</Th>
                <Th w="40%">Name</Th>
                <Th w="40%">Slug</Th>
                <Th w="1%">Sort</Th>
                <Th>Publish</Th>
                <Th textAlign={"center"}>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {[...Array(per_page)].map((x, i) => (
                <Tr key={i} py="0" size="sm">
                  <Td>{i}</Td>
                  <Td>Wisata</Td>
                  <Td>wisata</Td>
                  <Td isNumeric>10</Td>
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
            <Box>Show</Box>
            <Select w="80px" onChange={(e) => handlePerpage(e.target.value)}>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </Select>
            <Box>entries</Box>
          </HStack>
          <HStack>
            <Box>Page</Box>
            <InputGroup>
              <InputLeftElement>
                  <IconButton icon={<ArrowLeftIcon />} size="sm" />
              </InputLeftElement>
              <Input type="number" w="120px" textAlign="right" />
              <InputRightElement>
                <IconButton icon={<ArrowRightIcon />} size="sm" />
              </InputRightElement>
            </InputGroup>
          </HStack>
        </Flex>
      </Panel>
    </Template>
  );
}

export default Category;
