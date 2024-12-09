import React from 'react'
import { FaGlobeAsia, FaGithub } from 'react-icons/fa'
import { Tilt } from 'react-tilt'

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    50,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const ProjectCard = ({ projItem, visibleProjects }) => {
  if(visibleProjects !== "all"){
    return (
      <div className={`p_card ${projItem.filterBy === visibleProjects ? "" : "hidden"}`}>
        <h2>{projItem.name}</h2>
        <h4>{projItem.type}</h4>
        <p>{projItem.description}</p>
        <div className="tech">
          <p><strong>Tech Used</strong></p>
          <div className="tech_list">
            {projItem.tech.map((techItem, i) => (
              <Tilt key={i} options={defaultOptions} style={{ height: 40, width: 40 }}><img src={techItem.img} alt="" title={techItem.title} /></Tilt>
            ))}
          </div>
        </div>
        <div className="p_links">
            <a href={projItem.github} target='_blank'><FaGithub /> Github</a>
            <a href={projItem.netlify} target='_blank'><FaGlobeAsia /> Live Site</a>
        </div>
      </div>
    )
  }else{
    return (
      <div className='p_card'>
          <h2>{projItem.name}</h2>
          <h4>{projItem.type}</h4>
          <p>{projItem.description}</p>
          <div className="tech">
            <p><strong>Tech Used</strong></p>
            <div className="tech_list">
              {projItem.tech.map((techItem, i) => (
                <Tilt key={i} options={defaultOptions} style={{ height: 40, width: 40 }}><img src={techItem.img} alt="" title={techItem.title} /></Tilt>
              ))}
            </div>
          </div>
          <div className="p_links">
              <a href={projItem.github} target='_blank'><FaGithub /> Github</a>
              {projItem.netlify && <a href={projItem.netlify} target='_blank'><FaGlobeAsia /> Live Site</a>}
          </div>
      </div>
    )
  }
  
}

export default ProjectCard