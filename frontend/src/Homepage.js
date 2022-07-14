import React from 'react';
import InputForm from './components/InputForm';
import ExistingUserButton from './components/ExistingUserButton';
import NewUserButton from './components/NewUserButton';
import {Stack, Feature} from '@chakra-ui/react';


function Homepage({sundaes}){
 


  return (
    <Stack spacing = {8} direction='row'>

      
      <ExistingUserButton sundaes={sundaes.length > 0 ? sundaes: null} />


     
      <NewUserButton sundaes={sundaes.length > 0 ? sundaes: null}/>



    </Stack>
  
)}

export default Homepage;










  // 1) user should be able to input this information to a form  that will persist to the back end: name, favorite flavor, and age of account (POST)
//find a way to properly manage the user ids- David 