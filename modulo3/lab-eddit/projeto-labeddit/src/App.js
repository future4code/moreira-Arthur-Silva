import React from 'react';
import Router from './routes/Router';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`

const App = () => {
  return(
    <div>
      <GlobalStyle />
      <Router />
    </div>
  )
}
export default App;
