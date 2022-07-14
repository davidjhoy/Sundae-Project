import React from 'react'
import InputForm from './InputForm'
import {Button, useDisclosure, ScaleFade, Box, Center} from '@chakra-ui/react'

const ExistingUserButton = ({sundaes}) => {



    const { isOpen, onToggle } = useDisclosure()

  return (
    <Box >
        <Button onClick={onToggle} size='lg' alignSelf={'center'}>Existing Customer</Button>
        <ScaleFade initialScale={0.9} in={isOpen} offsety='20px' offsetx='-20000px'>
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
        </ScaleFade>
        
    </Box>
  )
    
  
}

export default ExistingUserButton;



