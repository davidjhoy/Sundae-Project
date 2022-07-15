import React, {useState} from 'react'
import Card from './components/card'
import InputForm from "./components/InputForm"
import { Wrap, WrapItem, Center } from '@chakra-ui/react'

//FRONTEND BUILDOUT: 


//2) user should be able to select from an array of flavors (dropdown list?)(GET) and an array of toppings (dropdown list?) to add to their sundae  so that it will persist to the back end (POST) 
//will be using user_id but comment it out for now
//refer to gallery
//will have to save the user id in state 
//-maggie

//3) Delete the whole sundae from front and backend if user decides to. (DELETE and PATCH) -- Lori
//styling cards add update button-Lori

//stretch goals: use an image api to query images and add to boxes 


function Gallery({sundaes, setSundaes}){



const sundae_list = sundaes.map((sundae)=>{
    return (
    // <Box p='2' border = '1px'>
    // <h1 key = {sundae.name}>{sundae.name}</h1>
    // </Box>)
    

<Card key = {sundae.id} name = {sundae.name} container = {sundae.container} topping = {sundae.topping} user_id = {sundae.user_id} p = '2' id = {sundae.id} setSundaes = {setSundaes} flavor_id ={sundae.flavor_id} sundaes = {sundaes}/>
    )
    
})



  return (
    

    
        <Wrap spacing ='50px' justify='center'>
        {sundaes.length > 1 ? sundae_list : "Loading..."}
        
        
        </Wrap>
            
    
       
   
  )
}

export default Gallery