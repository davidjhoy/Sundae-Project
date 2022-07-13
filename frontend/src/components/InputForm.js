import React from 'react'
import { Stack, HStack, Input, Text, Heading, Box, Flex } from '@chakra-ui/react'

const InputForm = () => {
  return (
    
        <HStack p='20'  size='100%' rounded = 'md' w='60%'>
        <Text w='100pt'>Add Sundae:</Text>
        <Input placeholder='Average Sundae' />
        </HStack>
 
    
  )
}

export default InputForm