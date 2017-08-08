import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink, Link } from 'react-router-dom'
import * as globalStyles from '../globalStyles'
import Wrapper from '../components/Wrapper'

const Page = styled.div`
  padding-top: ${globalStyles.menuHeight};
`

const MenuBar = styled.div`
  height: ${globalStyles.menuHeight};
  position: fixed;
  top: 0;
  width: 100%;
  background: ${globalStyles.mainColor};
  box-shadow: 0px 2px 9px 0px rgba(0,0,0,0.5);
  z-index: 99;
`

const MenuLink = styled(NavLink).attrs({
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
  float: right;
`

const Logo = styled(Link)`
  color: #fff;
  padding: 13px;
  font-size: 30px;
  font-weight: 200;
  float: left;
  text-decoration: none;
`

export default class Menu extends Component {
  render() {
    return (
      <Page>
        <MenuBar>
          <Wrapper>
            <Logo to="/"><strong>Albion</strong>Acres</Logo>
            <MenuLinks>
              <MenuLink exact to="/">Home</MenuLink>
              <MenuLink to="/goldens">Our Goldens</MenuLink>
              <MenuLink to="/boers">Our Boers</MenuLink>
              <MenuLink to="/contact">Contact</MenuLink>
            </MenuLinks>
          </Wrapper>
        </MenuBar>
        { this.props.children }
	    </Page>
    )
  }
}
