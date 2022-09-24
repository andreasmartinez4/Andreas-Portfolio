import React from 'react'

import './Footer.scss'

const Footer = () => {
  return (
    <div id='contact' className='app__footer'>
      <div className='app__footer-links'>
        <div>
          <h2>Contact</h2>
          <p style={{fontStyle:'italic'}}>Currently abroad in the Netherlands so please use email or my Netherlands phone number</p>
          <p><a href='mailto:andreasmart50@gmail.com'>andreasmart50@gmail.com</a></p>
          <p>+31 - 644552128 (Netherlands)</p>
          <p>(269) 363 - 1492 (United States)</p>
        </div>
        <div className='app__footer-socials'>
          <h2>Socials</h2>
          <p><a href='https://www.linkedin.com/in/andreas-martinez/' target='_blank'>Linkedin</a></p>
          <p><a href='https://www.instagram.com/an_dre_yes/' target='_blank'>Instagram</a></p>
          <p><a href='https://github.com/andreasmartinez4' target='_blank'>Github</a></p>
        </div>
      </div>
      <div className='app__footer-copyright'>
        <p>This website was made by Andreas Martinez @2022, view the github code <a href='https://github.com/andreasmartinez4/Andreas-Portfolio' target='_blank'>here</a></p>
      </div>
    </div>
  )
}

export default Footer