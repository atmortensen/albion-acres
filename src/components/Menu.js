import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { NavLink, withRouter } from 'react-router-dom'

const Wrapper = styled.div`

`
const Link = styled(NavLink).attrs({
  activeClassName: 'active'
})`
  color: green;
  &.active {
    color: blue;
  }
`

class Menu extends Component {
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
        <Link exact to="/">Home</Link>
        <Link to="/goldens">Goldens</Link>
        <Link to="/boers">Boers</Link>
        <Link to="/contact">Contact</Link>
        { this.props.children }
	    </Wrapper>
    )
  }
}

export default withRouter(connect(state => ({
	// Map state to props.
}), {
	// Map dispatch to props.
})(Menu))
