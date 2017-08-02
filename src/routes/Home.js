import React, { Component } from 'react'
import styled from 'styled-components'
import * as globalStyles from '../globalStyles'
import dogsOnHardwood from '../images/dogs_on_hardwood.jpg'
import clyde from '../images/clyde.jpg'

// Add a 100px wrapper component for menu items and video
// Make video show image until clicked

const vidWrapHeight = 80
const VideoWrapper = styled.div`
  width: 100%;
  height: ${vidWrapHeight}vh;
  // background: #fff;
  // margin-top: 25px;
`

const Video = styled.iframe`
  height: 100%;
  width: ${vidWrapHeight * 1.775}vh;
  margin: auto;
  display: block;
`

const Header = styled.h2`
  background: #fff;
  width: 100%;
  margin: 0;
  height: 300px;
  border-top: 5px ${globalStyles.mainColor} solid;
`

export default class Home extends Component {
  render() {
    return (
      <div>
        <VideoWrapper>
          <Video 
            src="https://www.youtube.com/embed/aSYoGah1kN8?autoplay=1&rel=0" 
            frameBorder="0">
          </Video>
        </VideoWrapper>
        <Header>Albion Acres!</Header>
      </div>
    )
  }
}
