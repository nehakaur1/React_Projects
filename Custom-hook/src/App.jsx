import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useMY_hook} from './custom_hook/my_hook'


function App() {
     
 const a= useMY_hook()
 console.log(a) ;
  return (
   
    <>
    <p>Final data is -- {a} </p>
    </>
  )
}

export default App
