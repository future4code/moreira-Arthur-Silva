import {  createMuiTheme } from '@material-ui/core/styles';
import { firstColor, secondColor } from './colors'


const theme =  createMuiTheme({
  palette: {
    primary: {
      main: firstColor,
      contrastText: "White"
    },
    secondary: {
      main: secondColor
    },
    text: {
      primary: firstColor,
    },
  },
});
export default theme
