import React from 'react'
import './ProjectCard.css'
const ProjectCard = ({p}) => {
  return (
    <>
      <div className="card">
        <img src={p.imgurl} alt="" />
        <h1>{p.title}</h1>
        <p>{p.disc}</p>
        <h3>{p.lang}</h3>
        <div className="cardbtn">
        <button >
        <a href={p.link} target="_blank" rel="noreferrer">Live</a>
        </button>
      <button>
      <a href={p.githublink} target="_blank" rel="nore"> Github</a>
      </button>
        </div>
       
        
      </div>

    </>
  )
}

export default ProjectCard
