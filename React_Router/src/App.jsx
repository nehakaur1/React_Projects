import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Contact from './pages/contact'



const App = () => {
  return (
    <div>
    <h1>React Router Demo</h1>
  <nav>
    <Link to="/">HOME</Link>
    <Link to="/contact">CONTACT</Link>
  </nav>

<Routes>
  <Route path="/" element={<Home/>}/>
    <Route path="/contact" element={<Contact />} />
</Routes>
    </div>
  
  )
}

export default App