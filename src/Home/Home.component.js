import React, { Component } from 'react'
import CoverImage from '../shared/CoverImage/CoverImage.component'
import Wrapper from '../shared/Wrapper/Wrapper.component'
import Gallery from '../shared/Gallery/Gallery.component'

export default class Home extends Component {
	constructor() {
		super()

		this.state = {
			slideshow: [
				{ image: 'https://storage.googleapis.com/albion-acres-2017/home_slideshow/Mortensen-3.jpg' },
				{ image: 'https://storage.googleapis.com/albion-acres-2017/home_slideshow/Mortensen-37.jpg' },
				{ image: 'https://storage.googleapis.com/albion-acres-2017/home_slideshow/Dogs_BarnBG.jpg' },
				{ image: 'https://storage.googleapis.com/albion-acres-2017/home_slideshow/EnglishRetrieve_SageBrilliant.jpg' },
				{ image: 'https://storage.googleapis.com/albion-acres-2017/home_slideshow/20160326_072740.jpg' },
				{ image: 'https://storage.googleapis.com/albion-acres-2017/home_slideshow/20160326_080943(0).jpg' },
				{ image: 'https://storage.googleapis.com/albion-acres-2017/home_slideshow/20160503_074931.jpg' },
				{ image: 'https://storage.googleapis.com/albion-acres-2017/home_slideshow/20160523_154614(0).jpg' },
				{ image: 'https://storage.googleapis.com/albion-acres-2017/home_slideshow/20160525_215647.jpg' },
				{ image: 'https://storage.googleapis.com/albion-acres-2017/home_slideshow/20160630_072219.jpg' },
				{ image: 'https://storage.googleapis.com/albion-acres-2017/home_slideshow/20160707_082611.jpg' },
				{ image: 'https://storage.googleapis.com/albion-acres-2017/home_slideshow/20160719_152021.jpg' },
				{ image: 'https://storage.googleapis.com/albion-acres-2017/home_slideshow/20160831_172226.jpg' },
				{ image: 'https://storage.googleapis.com/albion-acres-2017/home_slideshow/20160909_143920.jpg' },
				{ image: 'https://storage.googleapis.com/albion-acres-2017/home_slideshow/20161119_191138.jpg' }
			]
		}
	}

	render() {
		return (
			<div className="home-component">
				<CoverImage
					mainText="Albion Acres" 
					subText="Show Quality English Cream Golden Retrievers and Spotted Boer Goats"
					image="https://storage.googleapis.com/albion-acres-2017/cover-images/goldens_on_hay.jpg" />
				<Wrapper>
					<div className="card">
						<h3>Welcome to Albion Acres...</h3>
						<p>in Southern Idaho! We are a family with lots of passion for lots of crazy projects! Our love of animals has led us to create some exciting hobbies that keep us very busy. We find so much joy in raising, breeding and enjoying animals on our small hobby farm. We also own and operate a retreat that caters to families and groups for reunions. Many families and children have enjoyed visiting our goats, chickens, doves, emus, miniature donkeys, and beautiful English Creme Golden Retrievers. We hope you enjoy visiting our site!</p>
					</div>

					<Gallery images={this.state.slideshow} />

					<video controls poster="https://storage.googleapis.com/albion-acres-2017/videos/albion_acres.JPG">
						<source src="https://storage.googleapis.com/albion-acres-2017/videos/albion_acres.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</Wrapper>
			</div>
		)
	}
}
