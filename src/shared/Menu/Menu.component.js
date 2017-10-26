import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Wrapper from '../Wrapper/Wrapper.component'


export default class Menu extends Component {
	constructor() {
		super()
		this.state = {
			dropped: false
		}
	}

	toggleDrop() {
		this.setState({ hidden: false, dropped: !this.state.dropped })
	}

	render() {
		const menuClasses = `menu-links${ this.state.dropped ? ' dropped' : '' }`
		return (
			<div className="menu-component">
				<div className="menu-bar">
					<Wrapper>
						<Link className="logo" to="/"><strong>Albion</strong>Acres</Link>
						<div onClick={this.toggleDrop.bind(this)} className="hamburger">
							<div className="bar"></div>
							<div className="bar"></div>
							<div className="bar"></div>
						</div>
						<div onClick={this.toggleDrop.bind(this)} className={menuClasses}>
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
