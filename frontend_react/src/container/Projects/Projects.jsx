import React, { useState, useEffect } from 'react'

import { images } from '../../constants'
import { urlFor, client } from '../../client'
import ProjectTile from '../../components/ProjectTile'

import './Projects.scss'

const Projects = () => {

	const [projects, setProjects] = useState([])

  useEffect(() => {
    const query = '*[_type == "projects"]'

    client.fetch(query)
      .then((data) => setProjects(data))
  }, [])

  return (
		<div className='projects'>
			<a className='anchor' id='projects'/>
			<div className='app__projects-title'>
				<h1>Projects</h1>
			</div>
			<div className='app__projects-tiles'>
				{projects.map((project) => (
					<ProjectTile project={project} />
				))}
			</div>
    </div>
  )
}

export default Projects