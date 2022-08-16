import React from 'react'
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs'

const SocialMedia = (isIconsVisible) => {
  return (
    <div className='app__social'>
      {
        isIconsVisible ?
          <>
            <div>
              <BsInstagram />
            </div>
            <div>
              <BsLinkedin />
            </div>
            <div>
              <BsGithub />
            </div>
          </> : <></>
      }
        
    </div>
  )
}

export default SocialMedia