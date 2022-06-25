import React from 'react'
import { Global } from '@emotion/react'

function Fonts() {
  return (
    <Global styles={`
    @font-face {
        font-family: 'Nunito';
        font-size: 1rem;
        font-style: normal;
        src: url('../assets/fonts/Nunito/static/Nunito-Regular.ttf');
    }
    `}></Global>
  )
}

export default Fonts