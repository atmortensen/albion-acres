import React, { Component } from 'react'


export default class Wrapper extends Component {
	render() {
		return (
			<div className="wrapper-component">
				{ this.props.children }
			</div>
		)
	}
}

