
import React, {useEffect, useState} from 'react'
import Gallery from './Gallery';
import Homepage from './Homepage'
import InputForm from './components/InputForm'
import { Stack, HStack, VStack, Heading } from '@chakra-ui/react'
import { Switch, Route, Link } from "react-router-dom";

function App() {

const [sundaes, setSundaes] = useState([{name: "Default"}])




useEffect(()=>{
    fetch("http://localhost:9292/sundaes")
    .then(response=> response.json())
    .then(data=> setSundaes(data))
},[])

  function makeSundae(newSundae) {
    setSundaes([...sundaes, newSundae])
  }

  return (
    <VStack p='5'>
      <Heading p="8" size ='4xl' bgGradient='linear(to-r, yellow.400, red.400)'
  bgClip='text'>Bizzarro Sundaes</Heading>
    <Link id = 'gallery' to = '/Gallery'>Gallery </Link>
    <Link id = 'homepage' to = '/Homepage'>Homepage </Link>
      {/* <Gallery sundaes={sundaes.length > 0 ? sundaes: null }/> */}
      <InputForm makeSundae={makeSundae} sundaes={sundaes}/>
        <Switch>
          <Route exact path ='/' ><Homepage sundaes={sundaes}/></Route>
          <Route path="/Gallery" >
            <Gallery setSundaes={setSundaes} sundaes={sundaes.length > 0 ? sundaes: null}/>
          </Route>
       </Switch>
            

      
    </VStack>
  );
}

export default App;
