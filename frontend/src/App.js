import {useState} from "react"
import './App.css';
import { Box, Button, Center, Flex, Heading, Input } from "@chakra-ui/react";

function App() {

  const [res,setRes]=useState("")
  const [value,setValue]=useState("")
  
  const handleSubmit=()=>{
 fetch('https://shayari-t389.onrender.com/shayari',{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify({box:value})
  }).then(res=>res.json()).then(res=>setRes(res.data)).catch(e=>console.log(e))
  }

  return (
    <div style={{position:'relative',height:'97vh',width:'99vw',}}>
      <div style={{position:'absolute',height:'50vh',width:'50vw',top:'20%',left:'25%',transform:'translate(-50% -50%)'}}   >
      <Center>
        <Heading 
        bgGradient="linear(to-r, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722)"
        backgroundClip="text"
        color="transparent"
        as="span"
        >
        Shayari Generator
        </Heading>
        </Center>
        <Flex gap={'5vh'} p={'5vh'} w={'100%'} >
<Input placeholder="Type Word for Shayri"  onChange={(e)=>setValue(e.target.value)}/>

<Button onClick={handleSubmit}>Generate</Button>
</Flex>
<Box border={'1px solid #F012BE'} w={'100%'} h='40vh' borderRadius={'2vh'} color='#7FDBFF' p={'5vh'}
fontFamily={'sans-serif'} 
 fontSize={'1.5rem'}
>{!res ? (
  !value ? (
    <Heading>Welcome to our Shayari generator! Enter a word and click 'Generate' to create your Shayari.</Heading>
  ) : (
    <Heading>Your shayari will be available shortly!</Heading>
  )
) : (
  res
)}</Box>
      </div>
    </div>
  );
}

export default App;
