import React, {useState} from 'react'
import { Button, VStack, Center, Image, Heading, Box, Text, WrapItem, IconButton } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons';

function Card({name, container, topping, user_id, id}){


  function handleDelete() {
    // const [sundaes, setSundaes] = useState([])
    // const updatedSundae = sundaes.filter((sundae) => sundae.id !== id)
  
    // setSundaes(updatedSundae)
   //alter the state of sundaes 
    fetch(`http://localhost:9292/sundaes/${id}`, {
      method: "DELETE",
    })
    // .then(res => res.json())
    // .then(json => console.log(json)
  }

  
  return (
    <WrapItem w='380px' h='400px' bg='red.100' justifyContent={'center'} rounded = 'md'>
      <VStack>
      <Box >
        <Heading padding='5' color = 'orange.400'>{name}</Heading>
          <Box justifyContent={'center'}>
            <Text>{container}</Text>
            <Text>{topping}</Text>
            <Text> {user_id}</Text>
          </Box>
      </Box>
      <IconButton onClick={handleDelete} icon={<CloseIcon/>}/>
      </VStack>
    </WrapItem>
        
   
        
        
  
  )
}
export default Card;







// function UpdateSundaes(id) {
//   const [item, setItem] = useState({})
//   fetch(`/addsundae/${id}`, {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       name: item.name,
//       container: item.container,
//       topping: item.topping
//     }),
//   })
//     .then((res) => res.json())
//     .then((result) => setItem(result))
// }