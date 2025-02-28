"use client";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import { theme } from '../theme';
export default function MaterialProvider({ children }: Readonly<{ children: React.ReactNode }>) {




  return (
    <AppRouterCacheProvider options={{ key: 'css' }}>
      <ThemeProvider theme={theme} >
        <InitColorSchemeScript attribute="class" />
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}