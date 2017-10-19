import React, { Component } from 'react'
import CoverImage from '../shared/CoverImage/CoverImage.component'
import onTheMountain from '../images/on_the_mountain.jpg'

export default class Goldens extends Component {
	render() {
		return (
			<div>
				<CoverImage
					mainText="Get In Touch" 
					subText="Contact us for information about available English Cream puppies and Boer Goats"
					image={onTheMountain} />
			</div>
		)
	}
}
