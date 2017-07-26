import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Wrapper = styled.div`

`

class Boers extends Component {
	constructor() {
		super()
		this.state={

		}
	}

	componentDidMount() {

	}

	// Input handle function
	handleChange(field, event) {
		this.setState({ [ field ]: event.target.value })
	}

  render() {
    return (
    	<Wrapper>
        BOERS
	    </Wrapper>
    )
  }
}

export default connect(state => ({
	// Map state to props.
}), {
	// Map dispatch to props.
})(Boers)
