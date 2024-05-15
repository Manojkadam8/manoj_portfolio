import React from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'
import { SocialIcon } from 'react-social-icons'


const Navbar = () => {
  return (
    <>
    <header className='header'>
    <nav className='nav'>
      <div className='left'>
        <Link className='logo' activeClass='active' to='home' spy={true} smooth={true}  offset={-100} duration={500} >
          <img src="./images/Manoj Logo.png"  />
          
        </Link>
      </div>
      <div className='center'>
        <Link className='menu' activeClass='active' to='home' spy={true} smooth={true}  offset={-100} duration={500} >Home</Link>
        <Link className='menu'  activeClass='active' to='about' spy={true} smooth={true}  offset={-100} duration={500}>About</Link>
        <Link className='menu'  activeClass='active' to='skills' spy={true} smooth={true}  offset={-100} duration={500}>Skills</Link>
        <Link className='menu' activeClass='active' to='portfolio' spy={true} smooth={true}  offset={-100} duration={500}>Portfolio</Link>
        <Link className='menu' activeClass='active' to='contact' spy={true} smooth={true}  offset={-100} duration={500}>Contact</Link>
        
      </div>
      <div className='right'>
      <SocialIcon href="https://www.linkedin.com/in/manoj-kadam/" url="www.youtube.com" />
      <SocialIcon href="https://www.linkedin.com/in/manoj-kadam/" url="www.linkedin.com" />
      <SocialIcon href="https://www.linkedin.com/in/manoj-kadam/" url="www.instagram.com" />
      <SocialIcon href="https://www.linkedin.com/in/manoj-kadam/" url="www.github.com" />
      </div>
      </nav>
      </header>
    </>
  )
}

export default Navbar
