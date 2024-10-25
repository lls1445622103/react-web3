// 'use client';
import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
  // typography: {
  //   fontFamily: 'var(--font-roboto)',
  // },
  // palette: {
  //   mode: 'dark',
  // },
  colorSchemes: {
    // dark: true,
     dark: {
      palette: {
        mode: 'dark',
        primary: {
          main: '#f48fb1',
        },
        secondary: {
          main: '#f48fb1',
        },
      },
    },
    light: {
      palette: {
        mode: 'light',
        primary: {
          main: '#1976d2',
        },
        secondary: {
          main: '#d32f2f',
        },
      },
    },
  },
  cssVariables: {
    colorSchemeSelector: 'class'
  }
});


