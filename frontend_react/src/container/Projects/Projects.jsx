import React from 'react'

import { images } from '../../constants'

import './Projects.scss'

const Projects = () => {
  return (
		<div id='projects' className='app__projects'>
			<div className='app__projects-tile'>
				<img src={images.htmlIcon}/>
				<div>
					<h1>Hunger Games Simulator</h1>
					<p>This project never was completed but I'm still pretty proud of it. blah blah blah blah</p>
				</div>
			</div>
    </div>
  )
}

export default Projects