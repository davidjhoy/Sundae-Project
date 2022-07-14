import React, { useState } from 'react'
import { Stack, VStack, Input, Button, Text, Select, Heading, Box, Flex, useListStyles, useDisclosure, ScaleFade, flattenTokens } from '@chakra-ui/react'


const NewCustomerForm = ({sundaes}) => {
  const allFlavors = sundaes.map((sundae) => sundae.name)

  const [name, setName] = useState('')
  const [favorite_flavor, setFavoriteFlavor] = useState('')
  const [age_of_account, setAgeOfAccount] = useState('')
  
  


  function handleName(e){
    setName(e.target.value)
    console.log(e.target.value)
  }


  function handleFavoriteFlavor(e){
    setFavoriteFlavor(e.target.value)

    setAgeOfAccount(Math.floor(Math.random() * 11))
    console.log(e.target.value)
  }


  function handleSubmit(e){
    e.preventDefault()
  



 
    fetch(`http://localhost:9292/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        flavor: favorite_flavor,
        age: age_of_account
      }),
    })
      .then((res) => res.json())
      .then((result) => console.log(result))
  }
  

  return (
    
    
        <VStack p='20'  size='100%' rounded = 'md' w='100%'>
          <form onSubmit = {handleSubmit}>
              <Input placeholder='Customer Name' size='md' value ={name} onChange={handleName} color='black'/>

              <Select placeholder="Select Flavor" onChange={handleFavoriteFlavor} color ='black'>
                <option value={allFlavors[0]} >{allFlavors[0]}</option>
                <option value={allFlavors[1]}>{allFlavors[1]}</option>
                <option value={allFlavors[2]}>{allFlavors[2]}</option>
                <option value={allFlavors[3]}>{allFlavors[3]}</option>
                <option value={allFlavors[4]}>{allFlavors[4]}</option>
                <option value={allFlavors[5]}>{allFlavors[5]}</option>
                <option value={allFlavors[6]}>{allFlavors[6]}</option>
                <option value={allFlavors[7]}>{allFlavors[7]}</option>
                <option value={allFlavors[8]}>{allFlavors[8]}</option>
                <option value={allFlavors[9]}>{allFlavors[9]}</option>
              </Select>


              
              <Button bgGradient='linear(to-r, yellow.400, red.400)' color="white" type='submit'>Submit New Customer</Button>
            </form>
         
        </VStack>
 
    
  )
}

export default NewCustomerForm;




//2) user should be able to select from an array of flavors (dropdown list?)(GET) and an array of toppings (dropdown list?) to add to their sundae  so that it will persist to the back end (POST) 
  //will be using user_id but comment it out for now
  //refer to gallery
  //will have to save the user id in state 
  //-maggie

  // STEP BY STEP
  // 1) make dropdown lists - done
  //2)figure out how to post to back end from front end 
      
  //3)use state to store the selected item 
        //where should the state for this be stored? - form data state should be in inputFormwhere should the handleclick event happen? 
  //4)figure out how to post to the sundaes table from front end given any information
  //5)figure out how to link the state of the selected item and pass it into the post request

  // fetch("http://localhost:9292/sundaes", {
//       method: "POST",
//       headers: {
//         "Content-Type" : "application/json",
//       },
//       body: JSON.stringify({...formData})
//     })
//     .then((r) => r.json())
//     .then((newToy) => onAddToy(newToy))
    
//   }



  // <button onClick={UpdateSundae}>UPDATE ME!</button>