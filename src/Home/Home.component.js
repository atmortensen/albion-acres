import React, { Component } from 'react'
import CoverImage from '../shared/CoverImage/CoverImage.component'
import goldensOnHay from '../images/goldens_on_hay.jpg'

export default class Home extends Component {
	render() {
		return (
			<div className="home-component">
				<CoverImage
					mainText="Albion Acres" 
					subText="Show Quality English Cream Golden Retrievers and Spotted Boer Goats"
					image={goldensOnHay} />
			</div>
		)
	}
}
