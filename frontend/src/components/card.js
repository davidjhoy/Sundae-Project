import React from 'react'
import { Stack, HStack, Center, Image, Heading, Box, Text, WrapItem, Button } from '@chakra-ui/react'

function Card({name, container, topping, user_id, deleteSundaes}){





  return (
    <WrapItem w='380px' h='400px' bg='red.50' justifyContent={'center'} rounded = 'md'>
      <Box >
        <Heading padding='5' color = 'orange.400'>{name}</Heading>
          <Box justifyContent={'center'}>
            <Text>{container}</Text>
            <Text>{topping}</Text>
            <Text> {user_id}</Text>
            <Button bgGradient='linear(to-r, yellow.400, red.400)' color="white" onClick={deleteSundaes}>Delete Sundae</Button>
          </Box>
      </Box>
    </WrapItem>
        
   
        
        
  
  )
}
export default Card;