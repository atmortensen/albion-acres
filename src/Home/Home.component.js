import React, { Component } from 'react'
import CoverImage from '../shared/CoverImage/CoverImage.component'
import goldensOnHay from '../images/goldens_on_hay.jpg'
import img from '../images/jumping_boer.jpg'
import Wrapper from '../shared/Wrapper/Wrapper.component'
import Gallery from '../shared/Gallery/Gallery.component'

export default class Home extends Component {
	render() {
		const galleryImages = [
			{ image: goldensOnHay, alt: 'The image.' },
			{ image: img, alt: 'The next image.' },
			{ image: goldensOnHay, alt: 'The next image.' },
			{ image: img, alt: 'The next image.' },
			{ image: goldensOnHay, alt: 'The next image.' }
		]
		return (
			<div className="home-component">
				<CoverImage
					mainText="Albion Acres" 
					subText="Show Quality English Cream Golden Retrievers and Spotted Boer Goats"
					image={goldensOnHay} />
				<Wrapper>
					<Gallery images={galleryImages} />
				</Wrapper>
			</div>
		)
	}
}
