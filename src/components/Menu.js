import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink} from 'react-router-dom'
import * as globalStyles from '../globalStyles'

const Wrapper = styled.div`
  width: 100%;
`

const MenuBar = styled.div`
  width: 100%;
  background: ${globalStyles.mainColor};
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 2px 9px 0px rgba(0,0,0,0.5);
`

const Link = styled(NavLink).attrs({
  activeClassName: 'active'
})`
  color: #fff;
  text-decoration: none;
  display: block;
  padding: 15px;
  font-size: 25px;
  font-weight: 200;
  &.active {
    color: #333;
  }
  &:hover {
    color: #666;
  }
`

const MenuLinks = styled.div`
  display: flex;
`

const Logo = styled.div`
  color: #fff;
  padding: 15px;
  font-size: 25px;
  font-weight: 200;
`

export default class Menu extends Component {
  render() {
    return (
      <Wrapper>
        <MenuBar>
          <Logo><strong>Albion</strong>Acres</Logo>
          <MenuLinks>
            <Link exact to="/">Home</Link>
            <Link to="/goldens">Our Goldens</Link>
            <Link to="/boers">Our Boers</Link>
            <Link to="/contact">Contact</Link>
          </MenuLinks>
        </MenuBar>
        { this.props.children }
	    </Wrapper>
    )
  }
}
