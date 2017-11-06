import React, { Component } from 'react'
import CoverImage from '../shared/CoverImage/CoverImage.component'
import Wrapper from '../shared/Wrapper/Wrapper.component'

export default class Home extends Component {
	render() {
		return (
			<div className="home-component">
				<CoverImage
					mainText="Albion Acres" 
					subText="Show Quality English Cream Golden Retrievers and Spotted Boer Goats"
					image="https://storage.googleapis.com/albion-acres-2017/cover-images/goldens_on_hay.jpg" />
				<Wrapper>
					
				</Wrapper>
			</div>
		)
	}
}
