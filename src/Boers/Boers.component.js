import React, { Component } from 'react'
import CoverImage from '../shared/CoverImage/CoverImage.component'
import Wrapper from '../shared/Wrapper/Wrapper.component'

export default class Goldens extends Component {
	render() {
		return (
			<div className="boers-component">
				<CoverImage
					mainText="Spotted Boers" 
					subText="ABGA Full Blood Registered Spotted Boer Goats"
					image="https://storage.googleapis.com/albion-acres-2017/cover-images/jumping_boer.jpg" />
				<Wrapper>
					<h1>Coming Soon.</h1>
					<h2>Please contact Troy at 208.869.2141 for more information.</h2>

					<video controls poster="https://storage.googleapis.com/albion-acres-2017/videos/goats.jpeg">
						<source src="https://storage.googleapis.com/albion-acres-2017/videos/goats.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</Wrapper>
			</div>
		)
	}
}
