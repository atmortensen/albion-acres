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
						<p>Are you considering an English Cream for your family? Contact us for information on available puppies or with any other questions.</p>
						<p>Call or text Heather at <a href="tel:+12083128484">208.312.8484</a> or email <a href="mailto:hmmortensen@yahoo.com">hmmortensen@yahoo.com</a>.</p>
					</div>
					<p>
						<img src="https://storage.googleapis.com/albion-acres-2017/clyde/20160508_134558.jpg" alt="Idaho English Cream White Golden Retrievers" />
					</p>
				</Wrapper>
			</div>
		)
	}
}
