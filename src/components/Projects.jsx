import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from './ProjectCard'
import { projects } from '../data'

const Projects = () => {
  // const filterTabs = ["All", "Frontend", "UI", "Full Stack"];
  const filterTabs = ["All", "Frontend", "UI"];
  const [tabActive, setTabActive] = useState(filterTabs[0]);
  const [visibleProjects, setVisibleProjects] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleTabClick = (tabItem) => {
    setTabActive(tabItem);
    setVisibleProjects(tabItem.toLowerCase().split(" ").join(""));
  }
  // useEffect(() => {
  //   console.log(visibleProjects);
  //   setFilteredProjects(projects.filter(projItem => projItem.filterBy === visibleProjects));
  // }, [visibleProjects])
  
  
  return (
    <section id="projects">
      <div className="container">
        <h1 className='section_title'><span>01 </span>PROJECTS</h1>
        <div className={`tabs_filter ${tabActive.toLowerCase().split(" ").join("")}`}>
          {filterTabs.map((tabItem, i) => (
            <span key={i} className={`${tabActive == tabItem ? "active" : ""}`} onClick={() => handleTabClick(tabItem)}>{tabItem}</span>
          ))}
        </div>
        <div className="projects_container">
          {/* {projects.filter(projItem => projItem.filterBy === visibleProjects).map(projItem => (
            <ProjectCard projItem={projItem} key={projItem.id} />
          ))} */}
          {projects.map(projItem => (
            <ProjectCard projItem={projItem} key={projItem.id} visibleProjects={visibleProjects} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects