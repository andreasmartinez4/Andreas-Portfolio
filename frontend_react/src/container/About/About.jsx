import React from 'react'
import './About.scss'

const About = () => {
  return (
      <div className='app__about app__flex anchor'>
        <a className='about-anchor' id='about'/>
        <div className='app__about-text'>
          <h1>About Me</h1>
          <p>Hello! My name is Andreas Martinez. I am currently a Junior in college studying Computer Science at Grand Valley State University. 
            However, for this Fall Semester 2022, I am studying abroad at Vrije University in Amsterdam. 
            Growing up I always enjoyed working with computers; from taking them apart and learning the hardware to experimenting with
            software there was always something new to learn! Now that I’m in college I haven’t changed. 
            I still like working with computers and I really enjoy programming! I have however become more adventurous and I am always 
            looking to learn new things and gain new experiences.</p>
        </div>
      </div>
  )
}

export default About