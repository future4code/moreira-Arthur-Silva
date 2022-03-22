import React from 'react';
import Router from './routes/Router';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './constants/theme';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`

const App = () => {
  return(
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  )
}
export default App;
