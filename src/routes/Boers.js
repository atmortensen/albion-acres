import React, { Component } from 'react'
import styled from 'styled-components'
import * as globalStyles from '../globalStyles'
import CoverImage from '../components/CoverImage'
import jumpingBoer from '../images/jumping_boer.jpg'

export default class Goldens extends Component {
  render() {
    return (
      <div>
        <CoverImage
          mainText="Spotted Boer Goats" 
          subText="Show Quality English Cream Golden Retrievers and Spotted Boer Goats"
          image={jumpingBoer} />
      </div>
    )
  }
}
