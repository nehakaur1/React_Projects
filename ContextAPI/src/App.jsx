import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero' 
import Zero from './components/Zero'
import Mybox from './Context'

function App() {

let username="neha kaur is my pretty name"
  //let props any object
  let ob={
    name:"preet",
    sub:"science"
  }
  //let props any array

  let arr=[1,2,3];
  return (
    <>
    <Mybox.Provider value ={{username}}>
 <h1 className='bg-blue-300 p-4 font-bold text-blue-500 text'>Learning Props</h1>
 <Hero myobj={ob} myarr={arr}/>
 <Hero  buttontext="please visit me" msg="I Love My Siblings" />

 </Mybox.Provider>
   </>
  )
}

export default App
