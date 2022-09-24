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
    <div className='experience'>
      <a className='experience-anchor' id='experience'/>
      <div className='app__experience-header'>
        <h1>Experience</h1>
      </div>
      <div className='app__experience'>
        {experience.map((job, index) => (
          <div className='app__experience-tile'>
            <div className='app__experience-tile-header'>
              <div style={job.hasLogo ? {} : {textAlign:'center'}}>
                <h2>{job.workplace}</h2>
                <h3>{job.location}</h3>
              </div>
              {
                job.hasLogo ? <img src={urlFor(job.imageUrl).url()} alt='profile_bg'/> : <></>
              }
            </div>
            <div className="seperator" />
            <div className='app__experience-tile-text'>
            <div>
              <h4>{job.jobTitle}</h4>
              <h5>{job.startDate} - {job.endDate}</h5>
            </div>
            <ul>
              {job.responsibilities.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience