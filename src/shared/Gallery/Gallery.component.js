import React, { Component } from 'react'


export default class Gallery extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selected: 0,
			loading: false
		}
	}

	right() {
		if (this.state.loading) {
			return
		}
		this.setState({ loading: true })
		if (this.props.images[this.state.selected + 1]) {
			this.setState({ selected: ++this.state.selected })
		} else {
			this.setState({ selected: 0 })
		}
	}

	left() {
		if (this.state.loading) {
			return
		}
		this.setState({ loading: true })
		if (this.props.images[this.state.selected - 1]) {
			this.setState({ selected: --this.state.selected })
		} else {
			this.setState({ selected: this.props.images.length - 1 })
		}
	}
	
	render() {
		const image = this.props.images[this.state.selected]
		return (
			<div className="gallery-component">
				<div className="main-image">
					<img src={image.image} alt={image.alt} onLoad={() => this.setState({ loading: false })} />
					<i className="fa fa-chevron-right arrow-right" onClick={this.right.bind(this)}></i>
					<i className="fa fa-chevron-left arrow-left" onClick={this.left.bind(this)}></i>
				</div>
			</div>
		)
	}
}

