import React, { Component } from 'react'
import CoverImage from '../shared/CoverImage/CoverImage.component'
import jumpingBoer from '../images/jumping_boer.jpg'

export default class Goldens extends Component {
	render() {
		return (
			<div className="boers-component">
				<CoverImage
					mainText="Spotted Boers" 
					subText="ABGA Full Blood Registered Spotted Boer Goats"
					image={jumpingBoer} />
			</div>
		)
	}
}
