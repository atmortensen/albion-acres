import React, { Component } from 'react'
import styled from 'styled-components'
import * as globalStyles from '../globalStyles'
import CoverImage from '../components/CoverImage'
import puppyInABush from '../images/puppy_in_a_bush.jpg'

export default class Goldens extends Component {
  render() {
    return (
      <div>
        <CoverImage
          mainText="English Cream Golden Retrievers" 
          subText="Show Quality English Cream Golden Retrievers and Spotted Boer Goats"
          image={puppyInABush} />
      </div>
    )
  }
}
