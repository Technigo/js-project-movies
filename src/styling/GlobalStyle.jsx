import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle` 

:root {
    --color-error: #000000;
    --color-background: #333;
    --color-white: #FFFFFF
}

*, *::before, *::after {
  box-sizing: border-box;
}

body {
  line-height: 1.6;
  font-size: 16px;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}


h1 {
    font-size: 24px;

@media (width: 1024px) {
    font-size: 36px; 
  }
  }


p {
font-size: 16px;
@media (width:1600px){
font-size: 18px;
}
}

  `

  export default GlobalStyle