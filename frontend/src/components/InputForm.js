import React, { useState, useEffect } from 'react'
import { Stack, VStack, Input, Button, Text, Select, Heading, Box, Flex, useListStyles } from '@chakra-ui/react'

const InputForm = ({sundaes, makeSundae}) => {

  const [flavors, setFlavors] = useState([])
  
  // PATCH / update method
  const UpdateSundae = (id) => {
    const [item, setItem] = useState({})
    fetch(`/addsundae/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: item.name,
        container: item.container,
        topping: item.topping
      }),
    })
      .then((res) => res.json())
      .then((result) => setItem(result))
  }
  <button onClick={UpdateSundae}>UPDATE ME!</button>
  const [formData, setFormData] = useState({
    name: "",
    topping: "",
    // user_id: 0
  })
  
  
  useEffect(()=>{
    fetch("http://localhost:9292/flavors")
    .then(response=> response.json())
    .then(data=> setFlavors(data))
},[])

  const allFlavors = flavors.map((flavor) => flavor.name)
  console.log(allFlavors)
  const allToppings = sundaes.map((sundae) => sundae.topping)
  // console.log(allToppings)


  //2) user should be able to select from an array of flavors (dropdown list?)(GET) and an array of toppings (dropdown list?) to add to their sundae  so that it will persist to the back end (POST) - done
  //will be using user_id but comment it out for now
  //refer to gallery
  //will have to save the user id in state 
  //-maggie



  function handleSelectFlavor(e) {
    setFormData({name: e.target.value})
  }
  function handleSelectTopping(e) {
    setFormData({...formData, topping: e.target.value})
    
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData)
    fetch("http://localhost:9292/sundaes", {
        method: "POST",
        headers: {
          "Content-Type" : "application/json",
        },
        body: JSON.stringify({...formData})
      })
      .then((r) => r.json())
      .then((newSundae) => makeSundae(newSundae))
      
    }

  

  return (
    
    
        <VStack p='20'  size='100%' rounded = 'md' w='60%'>
        <Text w='100pt'>Add Sundae:</Text>
        <Select placeholder="Select Flavor" onChange={handleSelectFlavor}>
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
          <option value={allFlavors[10]}>{allFlavors[10]}</option>
          <option value={allFlavors[11]}>{allFlavors[11]}</option>
          <option value={allFlavors[12]}>{allFlavors[12]}</option>
          <option value={allFlavors[13]}>{allFlavors[13]}</option>
          <option value={allFlavors[14]}>{allFlavors[14]}</option>
          <option value={allFlavors[15]}>{allFlavors[15]}</option>
          <option value={allFlavors[16]}>{allFlavors[16]}</option>
          <option value={allFlavors[17]}>{allFlavors[17]}</option>
          <option value={allFlavors[18]}>{allFlavors[18]}</option>
          <option value={allFlavors[19]}>{allFlavors[19]}</option>
        </Select>
        <Select placeholder="Select Toppings" onChange={handleSelectTopping}>
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
        <Button bgGradient='linear(to-r, yellow.400, red.400)' color="white" onClick={handleSubmit}>Make Sundae</Button>
        </VStack>
 
    
  )
}

export default InputForm