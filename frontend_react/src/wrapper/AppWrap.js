import React from 'react'
import { NavigationDots, SocialMedia } from '../components'


const AppWrap = (Component, displaySocialMedia, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
			{
				displaySocialMedia ? <SocialMedia /> : <></>
			}
			<div className='app__wrapper app__flex'>
				<Component />
			</div>
    </div>
  )
}

export default AppWrap