import { createTheme } from '@mui/material/styles'

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
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: ['"SF Pro Display"'].join(','),
    fontSize: 20,
    allVariants: {
      lineHeight: '24.2px',
    },
    body1: {
      fontSize: 20,
      [`@media (max-width:1200px)`]: {
        fontSize: 18,
        lineHeight: '22px',
      },
      [`@media (max-width:600px)`]: {
        fontSize: 17,
        lineHeight: '22px',
      },
    },
    body2: {
      fontSize: 20,
      [`@media (max-width:1200px)`]: {
        fontSize: 18,
        lineHeight: '22px',
      },
      [`@media (max-width:600px)`]: {
        fontSize: 17,
        lineHeight: '22px',
      },
    },
    button: {
      fontSize: 20,
      [`@media (max-width:1200px)`]: {
        fontSize: 18,
        lineHeight: '22px',
      },
      [`@media (max-width:600px)`]: {
        fontSize: 17,
        lineHeight: '22px',
      },
    },
  },
})
