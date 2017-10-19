import React, { Component } from 'react'


export default class CoverImage extends Component {
	render() {
		const background = {
			background: `
				linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0.75) 100%), 
				url(${ this.props.image })
			`,
			backgroundSize: 'cover',
			backgroundPosition: 'center'
		}
		return (
			<div style={background} className="cover-image-component">
				<h1 className="main-text">{this.props.mainText}</h1>
				<h2 className="sub-text">{this.props.subText}</h2>
			</div>
		)
	}
}

