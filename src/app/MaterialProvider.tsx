"use client";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider, useColorScheme } from '@mui/material/styles';
import { darkTheme, lightTheme } from '../theme';
import { useEffect, createContext, useState, useMemo, useContext } from 'react';
const ThemeToggleContext = createContext({
  toggleTheme: () => { },
  isDarkMode: 'dark',
});
export const useThemeToggle: any = () => useContext(ThemeToggleContext);
export default function MaterialProvider({ children }: Readonly<{ children: React.ReactNode }>) {

  // 创建一个上下文，用于在组件间传递主题切换功能
  const [isDarkMode, setIsDarkMode] = useState('dark');
  const theme = useMemo(() => (isDarkMode === 'dark' ? darkTheme : lightTheme), [isDarkMode])
  const toggleTheme = () => {
    setIsDarkMode(modePre => modePre);
  };
  return (
    <AppRouterCacheProvider options={{ key: 'css' }}>
      <ThemeToggleContext.Provider value={{ toggleTheme, isDarkMode }}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </ThemeToggleContext.Provider>
    </AppRouterCacheProvider>
  );
}