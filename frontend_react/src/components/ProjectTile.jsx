import React, { useState } from 'react'
import { urlFor, client } from '../client'
import { BsGithub } from 'react-icons/bs'

const ProjectTile = ( { project }) => {

	const [image, setImage] = useState(0)
	const [activeImage, setActiveImage] = useState(0)

  return (
		<div className='app__projects-tile'>
			<div className='app__projects-tile-img'>
				<img src={urlFor(project.images[image]).url()}/>
				<div>
					{project.images.map((i, k) => (
						<div className={image == k ? 'active-img' : ''} onClick={() => setImage(k)}>
							<div></div>
						</div>
					))}
				</div>
			</div>
			<div className='app__projects-tile-text'>
				<div className='app__projects-tile-header'>
					<div>
						<h2>{project.projectName}</h2>
						<h4>{project.startDate} - {project.endDate}</h4>
					</div>
					<div className='github-icon'>
						<BsGithub size='30'/>
					</div>
				</div>
				<p>{project.description}</p>
			</div>
			<div className='app__projects-tile-icons'>
				{/*project.programmingIcons.map((icon) => (
					<img src={urlFor(icon).url()}/>
				))*/}
			</div>
		</div>
	)
}

export default ProjectTile