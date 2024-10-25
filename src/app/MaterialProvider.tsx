"use client";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { darkTheme } from '../theme';
import { useState } from 'react';
export default function MaterialProvider({ children }: Readonly<{ children: React.ReactNode }>) {

  // 创建一个上下文，用于在组件间传递主题切换功能
  const [isDarkMode, setIsDarkMode] = useState('dark');

  const toggleTheme = () => {
    setIsDarkMode(modePre => modePre);
  };
  return (
    <AppRouterCacheProvider options={{ key: 'css' }}>
      <ThemeProvider theme={darkTheme} >
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}