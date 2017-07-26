import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import * as apiActions from '../ducks/apiDuck'

const Head = styled.h1`
	color: blue;
	cursor: pointer;
	&:hover {
		color: green;
	}
`

const Image = styled.img`
	height: 300px;
`

class Home extends Component {
	constructor() {
		super()
		this.state={

		}
	}

	componentWillMount() {
		this.props.getChars()
	}

  render() {
    return (
    	<div>
				<Head onClick={this.props.getChars}>Hello World!</Head>
				<Image src={this.props.imageUrl} alt="Random Cat" />
	    </div>
    )
  }
}

export default connect(state => ({
	// Map state to props.
	imageUrl: state.apiDuck.image
}), {
	// Map dispatch to props.
	getChars: apiActions.getChars
})(Home)
