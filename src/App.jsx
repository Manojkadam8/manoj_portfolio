import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'

import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'

function App() {


  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Contact />
    </>
  )
}

export default App
