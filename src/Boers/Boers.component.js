import React, { Component } from 'react'
import CoverImage from '../shared/CoverImage/CoverImage.component'
import jumpingBoer from '../images/jumping_boer.jpg'

export default class Goldens extends Component {
	render() {
		return (
			<div>
				<CoverImage
					mainText="Spotted Boer Goats" 
					subText="Show Quality English Cream Golden Retrievers and Spotted Boer Goats"
					image={jumpingBoer} />
			</div>
		)
	}
}
