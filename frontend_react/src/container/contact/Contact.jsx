import React from 'react'

import './Contact.scss'

const Contact = () => {
  return (
    <div id='contact' className='app__flex'>
			<h1>Contact</h1>
			<div className='app__contact-name'>
				<div>
					<label>First Name:</label>
					<input />
				</div>
				<div>
					<label>Last Name:</label>
					<input />
				</div>
				<div>
					<label>Email:</label>
					<input />
				</div>
				<div>
					<label>Message</label>
					<input type='textarea'/>
				</div>
				<button onClick={() => window.location = 'mailto:yourmail@domain.com'}>Contact Me</button>

			</div>
    </div>
  )
}

export default Contact