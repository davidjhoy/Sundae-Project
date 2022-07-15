import React, {useState, useEffect} from 'react'
import TextInput from "./UpdateCardFormInput";
import {
    Stack, 
    ButtonGroup,
    Button
  } from '@chakra-ui/react'

const CardForm = ({ firstFieldRef, onCancel, id, user_id, flavor_id }) => {
    const [name, setName] = useState('Sundae')
    const [container, setContainer] = useState('1 gallon')
    const [topping, setTopping] = useState('Sprinkles')


    function handleName(e){
        setName(e.target.value)
    }
    function handleContainer(e){
        setContainer(e.target.value)
    }
    function handleTopping(e){
        setTopping(e.target.value)
    }
    function handleUpdate(){
    console.log('hi')
    fetch(`http://localhost:9292/sundaes/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      name: name,
      container: container,
      topping: topping, 
      user_id: user_id,
      flavor_id: flavor_id
      
    }),
    headers: {
      'Content-type': 'application/json'
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
  }
  
    return (
      <Stack spacing={4}>
        <TextInput
          label='Name'
          id='first-name'
          ref={firstFieldRef}
          defaultValue='Sundae'
          
          onChange = {handleName}
        />
        <TextInput
          label='Container'
          id='container'
          ref={firstFieldRef}
          defaultValue='1 gallon'
          
          onChange = {handleContainer}
        />
        <TextInput
          label='Topping'
          id='Topping'
          ref={firstFieldRef}
          defaultValue='Sprinkles'
          
          onChange = {handleTopping}
        />
        
        
        <ButtonGroup display='flex' >
        <Button colorScheme='pink' onClick = {handleUpdate} align='left'>
            Update
          </Button>
          <Button variant='outline' onClick={onCancel} align='right'>
            Cancel
          </Button>
          
        </ButtonGroup>
      </Stack>
    )
  }

  export default CardForm;

