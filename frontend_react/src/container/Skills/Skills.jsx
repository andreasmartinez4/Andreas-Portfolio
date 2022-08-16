import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AppWrap } from '../../wrapper'
import { images } from '../../constants'

import { urlFor, client } from '../../client'

import './Skills.scss'

const Skills = () => {

  const [skills, setSkills] = useState([])
  const [skillDescription, setSkillDescription] = useState('')

  useEffect(() => {
    const query = '*[_type == "skills"]'

    client.fetch(query)
      .then((data) => setSkills(data))
      .then((data) => setSkillDescription(data[0].skillDescription))
  }, [])

  return (
    <>
      <div className='app__skills'>
      <div className='app__skills-main'>
        <h1>Techincal Skills</h1>
        <div>
          {skills.map((skill, index) => (
            <div className='app__skill app__flex'>
              <img 
                src={urlFor(skill.imageUrl).url()} 
                alt='' 
                onMouseOver={() => setSkillDescription(skill.skillDescription)}
              /> 
            </div>
          ))}
        </div>
      </div>
      <div className='app__skills-main'>
        <h1>Some Experience With</h1>
        <div>
          {skills.map((skill, index) => (
            <div className='app__skill app__flex'>
              <img 
                src={urlFor(skill.imageUrl).url()} 
                alt=''
                onMouseOver={() => setSkillDescription(skill.skillDescription)}
              /> 
            </div>
          ))}
        </div>
      </div>
    </div>
      <div>
        <p>{skillDescription}</p>
      </div>
    </>
  )
}

export default AppWrap(Skills, false, 'skills')