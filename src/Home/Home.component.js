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
					<div className="card">
						<p>Welcome to Albion Acres in Southern Idaho! We are a family with lots of passion for lots of crazy projects! Our love of animals has led us to create some exciting hobbies that keep us very busy. We find so much joy in raising, breeding and enjoying animals on our small hobby farm. We also own and operate a retreat that caters to families and groups for reunions. Many families and children have enjoyed visiting our goats, chickens, doves, emus, miniature donkeys, and beautiful English Creme Golden Retrievers. We hope you enjoy visiting our site!</p>
					</div>

					<video controls poster="https://storage.googleapis.com/albion-acres-2017/videos/albion_acres.JPG">
						<source src="https://storage.googleapis.com/albion-acres-2017/videos/albion_acres.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</Wrapper>
			</div>
		)
	}
}
