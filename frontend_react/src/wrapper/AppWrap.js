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
				{
					/*
					<div className="copyright">
					<p className='p-text'>@2022 Andreas Martinez</p>
					<p className='p-text'>All rights reserved</p>
					</div>*/
				}
				
			</div>
    </div>
  )
}

export default AppWrap