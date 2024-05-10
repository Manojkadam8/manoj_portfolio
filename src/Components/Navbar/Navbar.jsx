import React from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
      <div >
        <Link className='nav' activeClass='active' to='home' spy={true} smooth={true}  offset={-100} duration={500} >Home</Link>
        <Link className='nav'  activeClass='active' to='about' spy={true} smooth={true}  offset={-100} duration={500}>About</Link>
        <Link className='nav' activeClass='active' to='contact' spy={true} smooth={true}  offset={-100} duration={500}>Contact</Link>
      </div>
    </>
  )
}

export default Navbar
