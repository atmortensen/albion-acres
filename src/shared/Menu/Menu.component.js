import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Wrapper from '../Wrapper/Wrapper.component'


export default class Menu extends Component {
	render() {
		return (
			<div className="menu-component">
				<div className="menu-bar">
					<Wrapper>
						<Link className="logo" to="/"><strong>Albion</strong>Acres</Link>
						<div className="menu-links">
							<NavLink className="menu-link" exact to="/">Home</NavLink>
							<NavLink className="menu-link" to="/goldens">Our Goldens</NavLink>
							<NavLink className="menu-link" to="/boers">Our Boers</NavLink>
							<NavLink className="menu-link" to="/contact">Contact</NavLink>
						</div>
					</Wrapper>
				</div>
				{ this.props.children }
			</div>
		)
	}
}
