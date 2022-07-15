import React, { useState } from 'react'
import { Stack, VStack, Input, Button, Text, Select, Heading, Box, Flex, useListStyles, useDisclosure, ScaleFade, flattenTokens } from '@chakra-ui/react'



const InputForm = ({sundaes}) => {
  const allFlavors = sundaes.map((sundae) => sundae.name)
  const allToppings = sundaes.map((sundae) => sundae.topping)
  const [name, setName] = useState('')
  const [container, setContainer] = useState('')
  const [flavor, setFlavor] = useState('')
  const [topping, setTopping] = useState('')
  

  function handleFlavor(e){
    setFlavor(e.target.value)
    console.log(e.target.value)
    
  }

  function handleTopping(e){
    setTopping(e.target.value)
    console.log(e.target.value)
  }

  function handleName(e){
    setName(e.target.value)
    console.log(e.target.value)
  }


  function handleContainer(e){
    setContainer(e.target.value)
    console.log(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log(name, container, flavor, topping)
    //make post request here
    fetch(`http://localhost:9292/sundaes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        container: container,
        flavor: flavor,
        topping: topping
      }),
    })
      .then((res) => res.json())
      .then((result) => console.log(result))
  }
  

  return (
    
    
        <VStack p='20'  size='100%' rounded = 'md' w='100%'>
          <form onSubmit = {handleSubmit}>
              <Input placeholder='Sundae Name' size='md' value ={name} onChange={handleName} color='black'/>

              <Input placeholder ='Container' size='md' value ={container} onChange ={handleContainer} color='black'/>

              <Select placeholder="Select Flavor" onChange={handleFlavor} color='black'>
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

              <Select placeholder="Select Toppings" onChange={handleTopping} color = 'black'>
                <option value={allToppings[0]}>{allToppings[0]}</option>
                <option value={allToppings[1]}>{allToppings[1]}</option>
                <option value={allToppings[2]}>{allToppings[2]}</option>
                <option value={allToppings[3]}>{allToppings[3]}</option>
                <option value={allToppings[4]}>{allToppings[4]}</option>
                <option value={allToppings[5]}>{allToppings[5]}</option>
                <option value={allToppings[6]}>{allToppings[6]}</option>
                <option value={allToppings[7]}>{allToppings[7]}</option>
                <option value={allToppings[8]}>{allToppings[8]}</option>
                <option value={allToppings[9]}>{allToppings[9]}</option>
              </Select>
              
              <Button bgGradient='linear(to-r, yellow.400, red.400)' color="white" type='submit'>Make Sundae</Button>
            </form>
         
        </VStack>
 
    
  )
}

export default InputForm




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