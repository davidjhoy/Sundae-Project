import React from 'react'
import { Stack, HStack, Center, Image, Heading, Box, Text, WrapItem } from '@chakra-ui/react'

function Card({name, container, topping, user_id}){



    //Here i need to fetch the data from the backend and send it to the card components


  return (
    <WrapItem w='380px' h='400px' bg='red.50' justifyContent={'center'} rounded = 'md'>
      <Box >
        <Heading padding='5' color = 'orange.400'>{name}</Heading>
          <Box justifyContent={'center'}>
            <Text>{container}</Text>
            <Text>{topping}</Text>
            <Text> {user_id}</Text>
          </Box>
      </Box>
    </WrapItem>
        
   
        
        
  
  )
}
export default Card;