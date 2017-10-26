import React, { Component } from 'react'


export default class Gallery extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selected: props.images[0]
		}
	}

	changeSelected(image) {
		this.setState({ selected: image })
	}
	
	render() {
		return (
			<div className="gallery-component">
				<div className="main-image">
					<img src={this.state.selected.image} alt={this.state.selected.alt} />
				</div>

				<div className="thumbnails">
					{this.props.images.map((image, i) => {
						return (
							<div className="thumbnail" key={i} onClick={this.changeSelected.bind(this, image)}>
								<img src={image.image} alt={image.alt} />
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}

