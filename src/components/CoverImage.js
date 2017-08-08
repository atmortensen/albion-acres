import React, { Component } from 'react'
import styled from 'styled-components'
import * as globalStyles from '../globalStyles'

const Background = styled.div`
  height: calc(100vh - ${globalStyles.menuHeight});
  background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0.75) 100%),
    url(${props => props.image});
  background-size: cover;
  background-position: center;
  border-bottom: 8px solid ${globalStyles.mainColor};
  position: relative;
`

const MainText = styled.h1`
  margin: 0;
  position: absolute;
  right: 20px;
  bottom: 40px;
  color: #FFF;
  font-size: 60px;
`

const SubText = styled.h2`
  margin: 0;
  position: absolute;
  right: 20px;
  bottom: 10px;
  color: #FFF;
  font-weight: normal;
  font-size: 30px;
`

export default class CoverImage extends Component {
  render() {
    return (
      <Background image={this.props.image}>
        <MainText>{this.props.mainText}</MainText>
        <SubText>{this.props.subText}</SubText>
      </Background>
    )
  }
}

