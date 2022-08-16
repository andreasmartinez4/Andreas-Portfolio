import React, { useState, useEffect } from 'react'

import { AppWrap } from '../../wrapper'
import { images } from '../../constants'
import { motion } from 'framer-motion'
import { urlFor, client } from '../../client'
import './Experience.scss'

const Experience = () => {
  const [experience, setExperience] = useState([])

  useEffect(() => {
    const query = '*[_type == "experience"]'

    client.fetch(query)
      .then((data) => setExperience(data))
  }, [])

  return (
    <div className='app__experience'>
      {experience.map((job, index) => (
        <motion.div className='app__experience-tile'
          whileHover={{scale: 1.03}}
          key={index}
        >
          <div className='app__experience-tile-header'>
            <div>
              <h1>{job.workplace}</h1>
              <h3>{job.location}</h3>
            </div>
            {
              job.hasLogo ? <img src={urlFor(job.imageUrl).url()} alt='profile_bg'/> : <></>

            }
          </div>
          <div className="seperator" />
          <div className='app__experience-tile-text'>
          <div>
            <h3>{job.jobTitle}</h3>
            <h4>{job.startDate} - {job.endDate}</h4>
          </div>
          <ul>
            {job.responsibilities.map((task, i) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
        </div>
        </motion.div>
      ))}
    </div>
  )
}

export default AppWrap(Experience, true, 'experience') 