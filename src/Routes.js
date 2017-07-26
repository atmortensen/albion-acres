import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './routes/Home'
import Goldens from './routes/Goldens'
import Boers from './routes/Boers'
import Contact from './routes/Contact'
import NotFound from './routes/NotFound'
import Menu from './components/Menu'

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
