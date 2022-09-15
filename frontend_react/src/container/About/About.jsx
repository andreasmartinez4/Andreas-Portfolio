import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { images } from '../../constants'

import { AppWrap } from '../../wrapper'
import { urlFor, client } from '../../client'

import './About.scss'

const About = () => {
  const [aboutTiles, setAboutTiles] = useState([])

  
  useEffect(() => {
    const query = '*[_type == "aboutTile"]'

    client.fetch(query)
      .then((data) => setAboutTiles(data))
  }, [])


  return (
    <div id='about' className='app__about app__flex'>
      <div className='app__about-text'>
        <h1>About Me</h1>
        <p>Hello! My name is Andreas Martinez. I am currently a Junior in college studying Computer Science at Grand Valley State University. 
          However, for this Fall Semester 2022, I am studying abroad at Vrije University in Amsterdam. 
          Growing up I always enjoyed working with computers; from taking them apart and learning the hardware to experimenting with
          software there was always something new to learn! Now that I’m in college I haven’t changed. 
          I still like working with computers and I really enjoy programming! I have however become more adventurous and I am always 
          looking to learn new things and gain new experiences.</p>
      </div>
      {/*}
      <div className='app__about-hobbies'>
        <img src={images.tempBackground} />
        <div>
          <h1>My Hobbies</h1>
          <p>
          I have quite a wide range of hobbies. Of course being a Computer Science nerd I enjoy your typical things like: programming, 
          gaming, and using discord! However I also have some interests outside of technology. During my first year in university I 
          took a rock climbing class and now I am hooked! I rock climb occasionally when I get the chance and I workout often! 
          I also can play the piano. I’m not super amazing at it but I definitely have come a long way!
          </p>
        </div>
      </div>
      {/*aboutTiles.map((aboutTile, index) => {

        const isLeftAligned = index % 2 === 0
        return (
          <motion.div className={isLeftAligned ? 'app__about-tile img-display-left' : 'app__about-tile img-display-right'}
            anmate={isLeftAligned ? { x: [-200, 0]} : {x: [200, 0]}}
            whileHover={{scale: 1.01}}
            key={index}
          >
            <div className='app__about-image' >
              <img className={isLeftAligned ? 'img-border-left' : 'img-border-right'} src={urlFor(aboutTile.imageUrl).url()} alt={aboutTile.header + ' image'}/>
            </div>
            <div className='app__about-text'>
              <h1>{aboutTile.header}</h1>
              <p>{aboutTile.text}</p>
            </div>
          </motion.div>
        )
      })*/}
    </div>
  )
}

export default About