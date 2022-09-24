import React from 'react'
import './Header.scss'
import { images } from '../../constants'
import socailMedia from '../../constants/socials'

const Header = () => {
  return (
    <div id='home' className='app__header'>
      <div>
        <h1>Andreas Martinez</h1>
        <p>Aspiring developer currently studying Computer Science at Grand Valley State University.</p>
        <div className='app__header-socials'>
          <ul className='app__flex'>
            {socailMedia.map((item) => (
              <li key={item[0]}>
                <a href={item[0] == 'resume' ? images.resume : item[1]} target={item[0] == 'resume' || item[0] == 'contact me' ? '' : '_blank'} download={item[0] == 'resume' ? true : false}>{item[0]}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <img src={images.aboutPhoto} alt='profile_bg'/>
    </div>
  )
}

export default Header