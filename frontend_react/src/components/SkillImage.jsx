import React, {useState} from 'react'

const SkillImage = ({imgURL, isDefault}) => {
	const [isActive, setIsActive] = useState(isDefault)

  return (
			<div 
				className='app__skill app__flex'
				onClick={() => setIsActive(true)}
			>
				<img 
					src={imgURL} 
				/> 
			</div>
  )
}

export default SkillImage