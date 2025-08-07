import { useEffect, useState } from "react";


 export  function useMY_hook(){
    const [my_data,setmy_data]=useState("")
    useEffect(()=>{
    async function fetching(){
const res = await fetch(
      "https://official-joke-api.appspot.com/jokes/random"
    );
    const data = await res.json();
     setmy_data(data.setup + "_" + data.punchline);
  
  }
  fetching()
    },[])
return my_data
    }
 