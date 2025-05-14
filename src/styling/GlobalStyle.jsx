import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle` 

:root {
    --color-text:  #FFFFFF;
    --color-border: #FFFFFF;
}

*, *::before, *::after {
  box-sizing: border-box;
}

body {
  line-height: 1.6;
  font-size: 16px;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}


h1 {
    font-size: 24px;
 
  }

h2 {
    font-size: 20px;
  
  }

  `

  export default GlobalStyle