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

						<p>After doing research we also found that there is evidence that the English Cream is healthier than the traditional Golden Retriever.  English Bloodlines have been found to be healthier than the American Bloodlines. Two studies found that 61% of American goldens died from cancer, whereas only 39% of goldens from English bloodlines were affected by cancer.</p>

						<p>Our English Creams have been a great addition to our family.  They are the best running, walking, camping, or hiking companions you will ever want.  They get a long well with our other animals and are so gentle with the kitties and baby goats.  English Cream Golden Retrievers are truly a wonderful breed!</p>
					</div>

					{/* CLYDE */}
					<Gallery images={this.state.clydeShow} />
					<div className="card">
						<p><strong>Clyde</strong> | Male | Born 03.11.2016 | 85 lbs</p>

						<p>Clyde's nickname is "Baby Clyde" because he is such a sweet boy and tender teddy bear.  Personality and demeanor are most important to look for in selecting a pet, and Clyde wins the contest.  Clyde has that strong block English Cream head with those droop jowls.  He has a beautiful dense white creamy coat and thick muscular body. Clyde comes from very famous Champions in Europe and Scandinavia.  His bloodline has strong kennel names looked for in breeding dogs.</p>

						<ul>
							<li>Pennhip # 110396 Rated within central 90% for this breed</li>
							<li>OFA Thyroid # GR-TH3346/15M/VPI  Normal</li>
							<li>OFA Heart # GR-CA32083/16M/C-PI Normal</li>
							<li>OFA Eyes # Normal</li>
							<li>Ichthyosis - Clear</li>
						</ul>

						<p>
							<a target="_blank" href="https://storage.googleapis.com/albion-acres-2017/pedigree/Clyde%20AKC%20Pedigree.pdf">AKC Pedigree</a>
						</p>
					</div>

					{/* WILLOW */}
					<Gallery images={this.state.clydeShow} />
					<div className="card">
						<p><strong>Willow</strong> | Female | Born 01.30.2016 | 70 lbs</p>

						<p>Willow has a very feminine look to her with her big dark eyes and long flowing white coat.  Her coat is long and very white but with less curl to it.  She is very athletic and loves to go jogging with us!  Willow has that perfect Retriever face with dark eyes, dark black nose and big smile set on a soft furry white face.  She loves to come in the house and knows when she is inside that she has to lay down and relax.  She is smart and knows the rules!  Willow is a lovely example of the English Cream.</p>

						<ul>
							<li>Pennhip # 109487 Rated within central 90% for this breed</li>
							<li>OFA Thyroid # GR-TH3345/17F-VPI  Normal</li>
							<li>OFA Heart # GR-CA32082/17F/C-PI Normal</li>
							<li>OFA Eyes # Normal</li>
							<li>Ichthyosis - Carrier</li>
						</ul>

						<p>
							<a target="_blank" href="https://storage.googleapis.com/albion-acres-2017/pedigree/Willow%20AKC%20Pedigree.pdf">AKC Pedigree</a>
						</p>
					</div>

					{/* STELLA */}
					<Gallery images={this.state.clydeShow} />
					<div className="card">
						<p><strong>Stella</strong> | Female | Born 12.30.2015 | 75 lbs</p>

						<p>Stella has some of the best confirmation for head and body type out there.  She has a beautiful big blocky head with high ear set.  Some folks sometimes mistaken her for a boy!  Her coat is silky white and very dense with a lot of wave to it.  She is very calm and loyal.  She is known for laying down next to us every few minutes if we are out on walks so we will stop and cuddle her.  Stella is a beautiful and noble looking female.</p>

						<ul>
							<li>Pennhip # 109488 Rated within central 90% for this breed</li>
							<li>OFA Thyroid # GR-TH3344/18F-VPI  Normal</li>
							<li>OFA Heart # Pending</li>
							<li>OFA Eyes # Pending</li>
							<li>Ichthyosis- Carrier</li>
						</ul>

						<p>
							<a target="_blank" href="https://storage.googleapis.com/albion-acres-2017/pedigree/Stella%20AKC%20Pedigree.pdf">AKC Pedigree</a>
						</p>
					</div>

					{/* JERSEY */}
					<Gallery images={this.state.clydeShow} />
					<div className="card">
						<p><strong>Jersey</strong> | Female | Born 02.23.2016 | 60 lbs</p>

						<p>Jersey is our "city dog" that loves being with the family as she thinks she is a human.  She is the best companion to take along anywhere.  Jersey is a smaller boned petite pretty girl.  He coat is the shiniest most bright white coat you will find in the English Cream.  Jersey has a perfect block head with high ear set.  She has large black twinkling eyes and that sweet smile known for in the English Cream.  She is very athletic, alert and agile.  Jersey loves to go running, fishing, camping, hiking or anything involved with her family!</p>

						<ul>
							<li>OFA Prelim # Good</li>
							<li>OFA Thyroid # GR-TH3330/15F-VPI  Normal</li>
							<li>OFA Heart # GR-CA31995/15F/P-VPI Normal</li>
							<li>OFA Eyes # Pending</li>
							<li>Ichthyosis- Clear</li>
						</ul>

						<p>
							<a target="_blank" href="https://storage.googleapis.com/albion-acres-2017/pedigree/12296-MMS-1510002130968-attachment1-20171106_134953.jpg">AKC Pedigree</a>
						</p>
					</div>
				</Wrapper>
			</div>
		)
	}
}
