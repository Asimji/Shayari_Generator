import {useState} from "react"
import './App.css';

function App() {

  const [res,setRes]=useState("")
  const [value,setValue]=useState("")
  
 

  const handleSubmit=()=>{
 fetch('http://localhost:8080/shayari',{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify({box:value})
  }).then(res=>res.json()).then(res=>setRes(res.data)).catch(e=>console.log(e))
  }

  return (
    <div >
      <div >
 <h1>Shayari Convertor</h1>
 <div style={{display:'flex'}}>
 <input placeholder="Type any word" onChange={(e)=>setValue(e.target.value)}/>
 <button onClick={handleSubmit}>Submit</button>
 </div>
 <div style={{border:"2px solid gray",height:'50vh',marginTop:'2vh'}}>{res} </div>
      </div>
    </div>
  );
}

export default App;
