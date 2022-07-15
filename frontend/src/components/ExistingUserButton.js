import React from 'react'
import InputForm from './InputForm'
import {Collapse, Button, useDisclosure, ScaleFade, Box, Center} from '@chakra-ui/react'

const ExistingUserButton = ({sundaes}) => {



    const { isOpen, onToggle } = useDisclosure()

  return (
    <Box display="flex" justifyItems="center">
        <Button onClick={onToggle} size='lg' alignSelf={'center'} bgGradient= 'linear(to-r, red.500, yellow.500)'
                  _hover={{ bgGradient:'linear(to-r, teal.200, green.200)', }}>Existing Customer</Button>
        <Collapse in={isOpen} animateOpacity>
          <Box
            p='40px'
            color='white'
            mt='4'
            bg='teal.50'
            rounded='md'
            shadow='md'
          >
          <InputForm sundaes={sundaes} />
          </Box>
        </Collapse>
        
    </Box>
  )
    
  
}

export default ExistingUserButton;



