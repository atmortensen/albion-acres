import React, { Component } from 'react'
import CoverImage from '../shared/CoverImage/CoverImage.component'
import puppyInABush from '../images/puppy_in_a_bush.jpg'

export default class Goldens extends Component {
	render() {
		return (
			<div className="goldens-component">
				<CoverImage
					mainText="Golden Retrievers" 
					subText="English Cream Goldens are known for their Relaxed and Friendly Temperaments"
					image={puppyInABush} />
			</div>
		)
	}
}
