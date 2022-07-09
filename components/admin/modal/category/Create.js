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
} from "@chakra-ui/react";
import { Form, Formik, Field, useFormik, yupToFormErrors } from "formik";
import { m } from "framer-motion";
import React, { useState } from "react";
import * as Yup from 'yup';

const Create = ({ modal_name }) => {  
  const formik = useFormik({
   
  });
  function validateName(value) {
    let error
    if (!value) {
      error = 'Name is required'
    } else if (value.toLowerCase() !== 'naruto') {
      error = "Jeez! You're not a fan 😱"
    }
    return error
  }
  return (
    <Modal isOpen={modal_name.isOpen} onClose={modal_name.onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Category</ModalHeader>
        <ModalCloseButton />
        <ModalBody>      
          <Formik
              initialValues={{
                name: '',
                publish: true,
                sort: 10
              }}
              validationSchema={Yup.object({
                name: Yup.string()
                  .required('Name required')
                  .min(5, "Minimum 5 characters"),
                sort: Yup.number('Number only'),
              })}
              onSubmit={(values, actions) => {
                alert(JSON.stringify(values, null, 2));
                actions.resetForm();
              }}          
            >
              {formik => (
                <SimpleGrid
                  as="form"
                  justifyItems={"stretch"}
                  onSubmit={formik.handleSubmit}
                  spacing={2}
                >
                  <FormControl isInvalid={formik.errors.name && formik.touched.name} isRequired>
                    <Flex justifyContent={"space-between"}>
                      <FormLabel>Name</FormLabel>
                      <Box w="70%">
                        <Field as={Input} name="name"/>                    
                        <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                      </Box>
                    </Flex>      
                  </FormControl>                  
                  <FormControl isInvalid={formik.errors.sort && formik.touched.sort} isRequired>
                    <Flex justifyContent={"space-between"}>
                      <FormLabel>Sort</FormLabel>
                      <Box w="70%">
                        <Field as={Input} name="sort"/>    
                        <FormErrorMessage>{formik.errors.sort}</FormErrorMessage>
                      </Box>
                    </Flex>      
                  </FormControl>    
                    <Flex>
                      <FormLabel w="30%">Publish</FormLabel>
                      <Field name="publish" as={Checkbox} />
                  </Flex>
                  <Flex justifyContent={"flex-end"} mt={8} gap={2}>
                    <Button colorScheme={"gray"} onClick={modal_name.onClose}>Cancel</Button>
                    <Button colorScheme={"green"} type="submit">Save</Button>
                  </Flex>             
                </SimpleGrid>
              )}
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Create;
