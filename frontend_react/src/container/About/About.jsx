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
      {aboutTiles.map((aboutTile, index) => {

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
      })}
    </div>
  )
}

export default About