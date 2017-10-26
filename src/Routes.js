import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './Home/Home.component'
import Goldens from './Goldens/Goldens.component'
import Boers from './Boers/Boers.component'
import Contact from './Contact/Contact.component'
import NotFound from './NotFound/NotFound.component'
import Menu from './shared/Menu/Menu.component'

export default class Routes extends Component {
	render() {
		return (
			<BrowserRouter>
				<Menu>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/goldens" component={Goldens} />
						<Route exact path="/boers" component={Boers} />
						<Route exact path="/contact" component={Contact} />
						<Route component={NotFound} />
					</Switch>
				</Menu>
			</BrowserRouter>
		)
	} 
}
