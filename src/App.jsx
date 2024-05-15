import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'

import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'
import Portfolio from './Components/Pages/Portfolio'
import Skills from './Components/Pages/Skills'

function App() {


  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Skills />
    <Portfolio />
    <Contact />
    </>
  )
}

export default App
