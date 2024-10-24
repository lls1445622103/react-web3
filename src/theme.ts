'use client';
import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  // palette: {
  //   mode: 'light',
  // },
  cssVariables: true,
});
const darkTheme = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  palette: {
    mode: 'dark',
  },
  cssVariables: true,
});

export {
  lightTheme,
  darkTheme
};
