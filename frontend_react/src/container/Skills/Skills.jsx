import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AppWrap } from '../../wrapper'
import { images } from '../../constants'

import { urlFor, client } from '../../client'

import './Skills.scss'

const Skills = () => {

  const [skills, setSkills] = useState([])
  const [secondarySkills, setSecondarySkills] = useState([])
  const [skillDescription, setSkillDescription] = useState('')
  const [secondarySkillDescription, setSecondarySkillDescription] = useState('')

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]'
    const secondarySkillsQuery = '*[_type == "secondarySkills"]'

    client.fetch(skillsQuery)
      .then((data) => setSkills(data))
      .then((data) => setSkillDescription(data[0].skillDescription))

    client.fetch(secondarySkillsQuery)
      .then((data) => setSecondarySkills(data))
      .then((data) => setSecondarySkillDescription(data[0].skillDescription))
  }, [])

  let experienceWith = [images.pythonLogo, images.cLogo, images.cplusplusLogo, images.csharpLogo]

  const [activeSkill, setActiveSkill] = useState(0)
  const [activeSecondarySkill, setActiveSecondarySkill] = useState(0)

  return (
      <div className='app__skills'>
        <div className='app__skills-main'>
          <h1>Techincal Skills</h1>
          <div className='app__skills-skill-group'>
            <div>
              {skills.map((skill, index) => (
                <div 
                  className={'app__skill app__flex'}
                  onClick={() => setActiveSkill(index)}
                >
                  <img 
                    className={activeSkill === index ? 'app__skill-active' : ''}
                    src={urlFor(skill.imageUrl).url()} 
                  /> 
                </div>
              ))}
            </div>
            <p>{skills[activeSkill]?.skillDescription}</p>
          </div>
        </div>
        <div className='app__skills-main'>
          <h1>Experience With</h1>
          <div className='app__skills-skill-group'>
            <div>
              {secondarySkills.map((skill, index) => (
                <div 
                  className={'app__skill app__flex'}
                  onClick={() => setActiveSecondarySkill(index)}
                >
                  <img 
                    className={activeSecondarySkill === index ? 'app__skill-active' : ''}
                    src={urlFor(skill.imageUrl).url()} 
                  /> 
                </div>
              ))}
            </div>
            <p>{secondarySkills[activeSecondarySkill]?.skillDescription}</p>
          </div>
        </div>
      </div>
  )
}

export default AppWrap(Skills, false, 'skills')