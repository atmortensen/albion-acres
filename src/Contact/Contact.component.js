import React, { Component } from 'react'
import CoverImage from '../shared/CoverImage/CoverImage.component'
import onTheMountain from '../images/on_the_mountain.jpg'

export default class Goldens extends Component {
	render() {
		return (
			<div className="contact-component">
				<CoverImage
					mainText="Get In Touch" 
					subText="Contact us for more information about available Goldens and Boer Goats"
					image={onTheMountain} />
			</div>
		)
	}
}
