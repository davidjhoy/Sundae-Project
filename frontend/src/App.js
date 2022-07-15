
import React, {useEffect, useState} from 'react'
import Gallery from './Gallery';
import Homepage from './Homepage';
import InputForm from './components/InputForm'
import { Stack, HStack, VStack, Heading, Text, Box, MenuList, MenuItem, Menu, MenuButton, IconButton } from '@chakra-ui/react'
import { Switch, Route, Link } from "react-router-dom";
import { HamburgerIcon } from '@chakra-ui/icons';

function App() {

const [sundaes, setsundaes] = useState([{name: "Default"}])



// const parseData = (sundaes)=>{
//     setsundaes(sundaes)
// }

useEffect(()=>{
    fetch("http://localhost:9292/sundaes")
    .then(response=> response.json())
    .then(data=> setsundaes(data))
},[])

  function makeSundae() {
    const newSundae = {}
  }



  return (
    <VStack p='5' bgColor='yellow.50' h='100%' w='100%'>
      <HStack>
      
        <Menu align='left'>
            <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={<HamburgerIcon />}
              variant='outline'
            />
                  <MenuList>
                    <MenuItem  >
                      <Link id = 'gallery' to = '/Gallery'>Gallery </Link>
                    </MenuItem>

                    <MenuItem >
                      <Link id = 'homepage' to = '/Homepage'>Homepage </Link>
                    </MenuItem>
                    
                    
                  </MenuList>
        </Menu>

    <   Heading p="8" size ='4xl' bgGradient='linear(to-r, yellow.400, red.400)'
      bgClip='text'>
        <Text>Bizzarro Desserts</Text>
        
        </Heading>

      </HStack>


        <Switch>

          <Route exact path ='/Homepage' >
            <Homepage sundaes={sundaes.length > 0 ? sundaes: null}/>
          </Route>

          <Route path="/Gallery" >
            <Gallery sundaes={sundaes.length > 0 ? sundaes: null} setSundaes = {setsundaes} />
          </Route>

       </Switch>
            

      
    </VStack>
  );
}

export default App;





 {/* <Box align='left' w ='100%'>
        <VStack>
          <Link id = 'gallery' to = '/Gallery'>Gallery </Link>
          <Link id = 'homepage' to = '/Homepage'>Homepage </Link>
        </VStack>
    </Box> */}