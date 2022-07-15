import React, {useState, useEffect} from 'react'
import CardForm from './UpdateCardForm';
import { Button, VStack, HStack, Center, Image, Heading, Box, Text, WrapItem, IconButton, Icon } from '@chakra-ui/react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  isOpen,
  firstFieldRef,
  onOpen,
  onClose,
  useDisclosure
} from '@chakra-ui/react'
import { CloseIcon, EditIcon } from '@chakra-ui/icons';
import FocusLock from 'react-focus-lock';

function Card({name, container, topping, user_id, id, flavor_id, sundaes, setSundaes}){
  const [im, setimage] = useState('')
  const [picArray, setPicArray] = useState([])
  const { onOpen, onClose, isOpen } = useDisclosure()
  const firstFieldRef = React.useRef(null)
  

 
  function handleDelete() {
    // const [sundaes, setSundaes] = useState([])
    // const updatedSundae = sundaes.filter((sundae) => sundae.id !== id)
  
    // setSundaes(updatedSundae)
   //alter the state of sundaes 
   const newSundaes = sundaes.filter((sundae)=>{
    return sundae.name != name
   })
   setSundaes(newSundaes)
    fetch(`http://localhost:9292/sundaes/${id}`, {
      method: "DELETE",
    })
    // .then(res => res.json())
    // .then(json => console.log(json)
  }

  const handlePictureGet =(response)=>{
      //map through the array and return photo URLS; 
      
     let intermediateArray = []
     
     response.photos.map((photo)=>{
      intermediateArray.push(photo.src.small);
     })
      setPicArray(intermediateArray)
  }
  
  useEffect(()=>{
  
      const options = {
        method: 'GET',
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "Authorization": '563492ad6f9170000100000132891a3cc620473596b9e673b4393767',
          'X-RapidAPI-Key': 'cbd3654cbamshbad79803137a4fcp17e689jsn68013eecbb0d',
          'X-RapidAPI-Host': 'PexelsdimasV1.p.rapidapi.com'
        }
      };
      
      fetch(`https://pexelsdimasv1.p.rapidapi.com/v1/search?query=${name}&locale=en-US&per_page=1&page=1`, options)
        .then(response => response.json())
        .then(response => handlePictureGet(response))
        .catch(err => console.error(err));
  
    },[])
  
  return (
    <WrapItem w='380px' h='400px' bg='red.100' justifyContent={'center'} rounded = 'md'>
      <VStack>
      <Box >
        <Heading padding='5' color = 'orange.400'>{name}</Heading>
        <Box boxSize='small' align='center'><Image src={picArray[0]}/></Box>
          <Box justifyContent={'center'}>
            <Text>{container}</Text>
            <Text>{topping}</Text>
            <Text> {user_id}</Text>
          </Box>
      </Box>
      <HStack>
      
      <Popover
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        placement='right'
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <IconButton size='sm' icon={<EditIcon />} />
        </PopoverTrigger>
        <PopoverContent p={5}>
          <FocusLock returnFocus persistentFocus={false}>
            <PopoverArrow />
            <PopoverCloseButton />
            <CardForm firstFieldRef={firstFieldRef} onCancel={onClose} id = {id} user_id = {user_id} flavor_id = {flavor_id}/>
          </FocusLock>
        </PopoverContent>
      </Popover>
      <IconButton onClick={handleDelete} icon={<CloseIcon/>} align ='right'/>
      
      </HStack>
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