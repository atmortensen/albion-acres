import { injectGlobal, css } from 'styled-components'
import background from './images/bg.png'

export const mainColor = '#97a085'
export const menuHeight = '65px'
export const breakPoint = '1200px'
export const mobile = (...args) => css`
  @media (max-width: 1200px) {
    ${css(...args)}
  }
`

// Global styles to be used sparingly...
// eslint-disable-next-line
injectGlobal`
  * {
    font-family: 'Roboto Slab', serif;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    background: url(${background});
    min-height: 100vh;
    border-bottom: 8px solid ${mainColor}
  }
`
