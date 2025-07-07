import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'

function App() {

  //let props any object
  let ob={
    name:"preet",
    sub:"science"
  }
  //let props any array

  let arr=[1,2,3];
  return (
    <>
 <h1 className='bg-blue-300 p-4 font-bold text-blue-500 text'>Learning Props</h1>
 <Hero username="This Is First One" myobj={ob} myarr={arr}/>
 <Hero  username="This Is second One" buttontext="please visit me" msg="I Love My Siblings" />
 
    </>
  )
}

export default App
