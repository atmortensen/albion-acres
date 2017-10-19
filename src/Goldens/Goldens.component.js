import React, { Component } from 'react'
import CoverImage from '../shared/CoverImage/CoverImage.component'
import puppyInABush from '../images/puppy_in_a_bush.jpg'

export default class Goldens extends Component {
	render() {
		return (
			<div className="goldens-component">
				<CoverImage
					mainText="English Cream Golden Retrievers" 
					subText="Show Quality English Cream Golden Retrievers and Spotted Boer Goats"
					image={puppyInABush} />
			</div>
		)
	}
}
