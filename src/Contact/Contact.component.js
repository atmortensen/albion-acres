import React, { Component } from 'react'
import CoverImage from '../shared/CoverImage/CoverImage.component'

export default class Goldens extends Component {
	render() {
		return (
			<div className="contact-component">
				<CoverImage
					mainText="Get In Touch" 
					subText="Contact us for more information about available Goldens and Boer Goats"
					image="https://storage.googleapis.com/albion-acres-2017/cover-images/on_the_mountain.jpg" />
			</div>
		)
	}
}
