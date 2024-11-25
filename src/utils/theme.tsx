import { createTheme } from '@mui/material/styles'
// import SFProDisplayRegular from '../assets/fonts/SF-Pro-Display-Regular.ttf'
// import SFProDisplayBold from '../assets/fonts/SF-Pro-Display-Bold.ttf'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#2264E5',
    },
    secondary: {
      main: '#A0A0A0',
      light: '#D9D9D9',
    },
    success: {
      main: '#22E564',
    },
    error: {
      main: '#E52222',
    },
  },
  typography: {
    fontFamily: ['"SF Pro Display"'].join(','),
  },
})
