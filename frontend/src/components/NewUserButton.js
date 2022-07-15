import React from 'react'
import InputForm from './InputForm'
import {onToggle, Collapse, Button, useDisclosure, ScaleFade, Box} from '@chakra-ui/react'
import NewCustomerForm from './NewCustomerForm'


const NewUserButton = ({sundaes}) => {
    const { isOpen, onToggle } = useDisclosure()
  return (
    <Box w="100%" display="flex" justifyItems="center"  >
      <Button
      alignSelf={'center'}
      onClick={onToggle} 
      size='lg' 
      bgGradient= 'linear(to-r, red.500, yellow.500)'
                  _hover={{ bgGradient:'linear(to-r, teal.200, green.200)', }}>New Customer</Button>
      <Collapse in={isOpen} animateOpacity>
      {/* // initialScale={0.9} in={isOpen}  */}
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
      </Collapse>
    </Box>
  )
  
}

export default NewUserButton