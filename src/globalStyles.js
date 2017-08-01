import { injectGlobal } from 'styled-components'

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
  }
`
