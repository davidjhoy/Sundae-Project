
import React, {useEffect, useState} from 'react'
import Gallery from './Gallery';
import Homepage from './Homepage'
import InputForm from './components/InputForm';
import { Stack, HStack, VStack, Heading } from '@chakra-ui/react'
import { Switch, Route, Link } from "react-router-dom";

function App() {

const [sundaes, setsundaes] = useState([{name: "Default"}])

const parseData = (sundaes)=>{
    setsundaes(sundaes)
}

useEffect(()=>{
    fetch("http://localhost:9292/sundaes")
    .then(response=> response.json())
    .then(data=> parseData(data))
},[])


  return (
    <VStack p='5'>
      <Heading p="8" size ='4xl' bgGradient='linear(to-r, yellow.400, red.400)'
  bgClip='text'>Sundae Supreme</Heading>
    <Link id = 'gallery' to = '/Gallery'>Gallery </Link>
    <Link id = 'homepage' to = '/Homepage'>Homepage </Link>
      <InputForm p='4'/>
      {/* <Gallery sundaes={sundaes.length > 0 ? sundaes: null }/> */}
      
        <Switch>
          <Route exact path ='/' ><Homepage /></Route>
          <Route path="/Gallery" >
            <Gallery sundaes={sundaes.length > 0 ? sundaes: null}/>
            </Route>
            
        </Switch>

      
    </VStack>
  );
}

export default App;
