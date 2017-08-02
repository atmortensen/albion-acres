import { injectGlobal } from 'styled-components'
import background from './images/bg.png'

export const mainColor = '#97a085'

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
