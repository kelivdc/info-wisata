import {
  Button,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  FormErrorMessage,
  ModalFooter,
  ModalBody,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Switch,
  SimpleGrid,
  VStack,
  Heading,
  Box,
  Flex,
  Wrap,
  WrapItem,
  Checkbox,
  Alert,
  AlertIcon,
  AlertDescription,
  HStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { slugify } from "/lib/Global";

const Create = ({ modal_name }) => {  
  const [slug, setSlug] = useState('')
  const handleName = (value) => {
    setSlug(slugify(value))
  }

  return (
    <Modal isOpen={modal_name.isOpen} onClose={modal_name.onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Category</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Alert status="error" mb={2} is>
            <AlertIcon />
            <AlertDescription>Name is required<br />Hwqudhquwhdquwdh</AlertDescription>
          </Alert>
          <VStack gap={2}>
            <FormControl isRequired as="fieldset">
                <FormLabel>Name</FormLabel>
                <Input id="name" name="name" type="text" onKeyUp={(e) => handleName(e.target.value)}/>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Slug</FormLabel>
                <Input id="name" name="slug" type="text" defaultValue={slug} />
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Sort</FormLabel>                
                <Input id="sort" name="sort" type="number" />
            </FormControl>
            <FormControl>
                <Checkbox name="publish">Publish</Checkbox>
            </FormControl>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button mr={2} size="sm" colorScheme="gray" onClick={modal_name.onClose}>Cancel</Button>
          <Button size="sm" colorScheme="green">Save</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Create;
