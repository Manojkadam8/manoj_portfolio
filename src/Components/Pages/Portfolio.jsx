import React from 'react'
import { Projects } from '../../Service/Projectdata'
import ProjectCard from './ProjectCard'
import './Portfolio.css'
const Portfolio = () => {
  
  return (
    <>
      <section id='portfolio' className='section4'>
      <h1 className='portfolioheading'>PortFolio</h1>
        <div className="proffoliocard">
        
          <div className="portfoliocontent">
      {Projects.map((p)=>
   <ProjectCard key={p.index} p={p}/>
      )}
      </div>
      </div>
      </section>
    </>
  )
}

export default Portfolio;
