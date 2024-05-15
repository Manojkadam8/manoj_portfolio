import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <>
    <section id='home' className='section1'>
    <div className="home-left">
    <h2>I am Manoj Kadam</h2>
    <h3>Full Stack Developer</h3>
    <h5>I Develop Web App Using Spring Boot for Backend And React For Frontend</h5>
    <div className='btn'>
      <button>
        <a href="./Resume/Manoj.pdf" target='_blank'>Download CV  <img src="./images/cloud-computing.png" alt="" /></a>
       
      </button>
    </div>
    </div>
    <div className="home-right">
      <img src="./images/home-main.svg" alt="" />
    </div>
    </section>
      
    </>
  )
}

export default Home
