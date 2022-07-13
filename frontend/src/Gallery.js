import React, {useState} from 'react'
import Card from './components/card'
import { Wrap, WrapItem, Center } from '@chakra-ui/react'

function Gallery({sundaes}){



const sundae_list = sundaes.map((sundae)=>{
    return (
    // <Box p='2' border = '1px'>
    // <h1 key = {sundae.name}>{sundae.name}</h1>
    // </Box>)
    

<Card key = {sundae.name} name = {sundae.name} constainer = {sundae.container} topping = {sundae.topping} user_id = {sundae.user_id} p = '2'/>
    )
    
})

console.log(sundae_list)
  return (
    

    
        <Wrap spacing ='50px' justify='center'>
        {sundaes.length > 1 ? sundae_list : "Loading..."}
        
        
        </Wrap>
            
    
       
   
  )
}

export default Gallery