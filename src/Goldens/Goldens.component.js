import React, { Component } from 'react'
import CoverImage from '../shared/CoverImage/CoverImage.component'
import Wrapper from '../shared/Wrapper/Wrapper.component'
import Gallery from '../shared/Gallery/Gallery.component'

export default class Goldens extends Component {
	constructor() {
		super()
		this.state = {
			clydeShow: [
				{ image: 'https://storage.googleapis.com/albion-acres-2017/clyde/20170311_124800.jpg' },
				{ image: 'https://storage.googleapis.com/albion-acres-2017/clyde/20160326_165456.jpg' },
				{ image: 'https://storage.googleapis.com/albion-acres-2017/clyde/20160326_165901.jpg' },
				{ image: 'https://storage.googleapis.com/albion-acres-2017/clyde/20160326_170313.jpg' },
				{ image: 'https://storage.googleapis.com/albion-acres-2017/clyde/20160506_152227-001.jpg' },
				{ image: 'https://storage.googleapis.com/albion-acres-2017/clyde/20160506_153313.jpg' },
				{ image: 'https://storage.googleapis.com/albion-acres-2017/clyde/20160508_134558.jpg' },
				{ image: 'https://storage.googleapis.com/albion-acres-2017/clyde/20160522_164921(1).jpg' },
				{ image: 'https://storage.googleapis.com/albion-acres-2017/clyde/20160920_215839.jpg' },
				{ image: 'https://storage.googleapis.com/albion-acres-2017/clyde/20161019_100555.jpg' },
				{ image: 'https://storage.googleapis.com/albion-acres-2017/clyde/20161024_133834.jpg' },
				{ image: 'https://storage.googleapis.com/albion-acres-2017/clyde/20161024_133951.jpg' },
				{ image: 'https://storage.googleapis.com/albion-acres-2017/clyde/20170611_132901.jpg' },
				{ image: 'https://storage.googleapis.com/albion-acres-2017/clyde/20170611_201542(0).jpg' },
				{ image: 'https://storage.googleapis.com/albion-acres-2017/clyde/20170611_201847.jpg' },
				{ image: 'https://storage.googleapis.com/albion-acres-2017/clyde/20170617_162505.jpg' },
				{ image: 'https://storage.googleapis.com/albion-acres-2017/clyde/20170619_075057.jpg' }
			]
		}
	}

	render() {
		return (
			<div className="goldens-component">
				<CoverImage
					mainText="Golden Retrievers" 
					subText="English Cream Goldens are known for their Relaxed and Friendly Temperaments"
					image="https://storage.googleapis.com/albion-acres-2017/cover-images/puppy_in_a_bush.jpg" />

				<Wrapper>
					<video controls poster="https://storage.googleapis.com/albion-acres-2017/videos/dogs_thumbnail.jpeg">
						<source src="https://storage.googleapis.com/albion-acres-2017/videos/dogs.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>

					<div className="card">
						<p>Our family has owned and loved a lot of dogs over the years.  We have had a Pembroke Welsh Corgi, an Akita, a Golden Doodle, a miniature Dachshund and several mixed breeds in between.  Eight years ago we were given a Golden Retriever puppy, and he has been the best family dog.  It is almost as if he understands every word we say!  We were in search of another dog and really wanted a big sweet mellow dog similar to our golden retriever.  We came upon the English Cream Golden Retriever, known for its larger size and beautiful white coat!  We since have added Clyde, Stella, Willow and Jersey to our family and have never been more pleased with a breed.  They have been everything we hoped for.  They are bigger boned and boxier then our traditional Golden, they have an amazing thick white coat and their temperaments are very relaxed and sweet.  The English Cream is exactly what we were looking for.</p>

						<p>After doing research we also found that there is evidence that the English Cream is healthier than the traditional Golden Retriever.  Enlgish Bloodlines have been found to be healthier than the American Bloodlines. Two studies found that 61% of American goldens died from cancer, whereas only 39% of goldens from English bloodlines were affected by cancer.</p>

						<p>Our English Creams have been a great addition to our family.  They are the best running, walking, camping, or hiking companions you will ever want.  They get a long well with our other animals and are so gentle with the kitties and baby goats.  English Cream Golden Retrievers are truly a wonderful breed!</p>
					</div>

					<Gallery images={this.state.clydeShow} />
					<div className="card">
						<p><strong>Clyde</strong> | Male | Born 03.11.2016 | 85 lbs</p>

						<p>Clyde's nickname is "Baby Clyde" because he is such a sweet boy and tender teddy bear.  Personality and demeanor are most important to look for in selecting a pet, and Clyde wins the contest.  Clyde has that strong block English Cream head with those droop jowels.  He has a beautiful dense white creamy coat and thick muscular body. Clyde comes from very famous Champions in Europe and Scandinavia.  His bloodline has strong kennel names looked for in breeding dogs.</p>

						<ul>
							<li>Pennhip # 110396 Rated within central 90% for this breed</li>
							<li>OFA Thyroid # GR-TH3346/15M/VPI  Normal</li>
							<li>OFA Heart # GR-CA32083/16M/C-PI Normal</li>
							<li>OFA Eyes # Normal</li>
							<li>Ichthyosis - Clear</li>
						</ul>
					</div>
				</Wrapper>
			</div>
		)
	}
}
