import React, { Component } from 'react'
import CoverImage from '../shared/CoverImage/CoverImage.component'
import Wrapper from '../shared/Wrapper/Wrapper.component'

export default class Goldens extends Component {
	render() {
		return (
			<div className="contact-component">
				<CoverImage
					mainText="Get In Touch" 
					subText="Contact us for more information about available Puppies and Boer Goats"
					image="https://storage.googleapis.com/albion-acres-2017/cover-images/on_the_mountain.jpg" />
				<Wrapper>
					<div className="card">
						<p>Want to know more about making an English Cream a part of your family? Contact us with any questions or to find out when we will have puppies available.</p>
						<p>Call or text Heather at 208.312.8484 or email hmmortensen@gmail.com.</p>
					</div>
					<p>
						<img src="https://storage.googleapis.com/albion-acres-2017/clyde/20160508_134558.jpg" alt="Idaho English Cream White Golden Retrievers" />
					</p>
				</Wrapper>
			</div>
		)
	}
}
