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

  let mySkills = [images.javaLogo, images.javascriptLogo, images.reactLogo, images.htmlLogo, images.cssLogo]
  let experienceWith = [images.pythonLogo, images.cLogo, images.cplusplusLogo, images.csharpLogo]

  const [activeSkill, setActiveSkill] = useState(0)
  const [skillTextPosition, setSkillTextPosition] = useState(0)

  return (
    <>
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
        <h1>Some Experience With</h1>
        <div>
          {experienceWith.map((skill, index) => (
            <div className='app__skill app__flex'>
              <img 
                src={skill} 
                alt=''
              /> 
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default AppWrap(Skills, false, 'skills')