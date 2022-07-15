import React from 'react'
import InputForm from './InputForm'
import {onToggle, Button, useDisclosure, ScaleFade, Box} from '@chakra-ui/react'
import NewCustomerForm from './NewCustomerForm'


const NewUserButton = ({sundaes}) => {
    const { isOpen, onToggle } = useDisclosure()
  return (
    <Box display="flex">
      <Button onClick={onToggle} size='lg'>New Customer</Button>
      <ScaleFade initialScale={0.9} in={isOpen} offsety='20px'>
        <Box
          p='40px'
          color='white'
          mt='4'
          bg='teal.50'
          rounded='md'
          shadow='md'
        >
          <NewCustomerForm sundaes = {sundaes}/>
        </Box>
      </ScaleFade>
    </Box>
  )
  
}

export default NewUserButton