import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function neha(){
    fetch('https://official-joke-api.appspot.com/jokes/random')
    .then(res=>res.json())
    .then(data=>console.log(data.setup+'_'+data.punchline)
      
    )
  }
  useEffect(()=>{
    neha();
  },[])

  return (
    <>
    <p>{count}</p>
      <button onClick={()=>{
setCount(count+1)
      }}>add</button>
    </>
  )
}

export default App
