import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Wrapper = styled.div`

`
const Link = styled(NavLink).attrs({
})`
  color: green;
  
`

export default class Menu extends Component {
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
        <NavLink activeClassName="active" exact to="/">Home</NavLink>
        <NavLink activeClassName="active" to="/goldens">Goldens</NavLink>
        <NavLink activeClassName="active" to="/boers">Boers</NavLink>
        <NavLink activeClassName="active" to="/contact">Contact</NavLink>
        { this.props.children }
	    </Wrapper>
    )
  }
}

// export default connect(state => ({
// 	// Map state to props.
// }), {
// 	// Map dispatch to props.
// })(Menu)
