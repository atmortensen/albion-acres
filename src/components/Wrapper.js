import React, { Component } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  width: 1200px;
  margin: auto;
`

export default class Wrapper extends Component {
  render() {
    return (
    	<Wrap>
        { this.props.children }
	    </Wrap>
    )
  }
}

