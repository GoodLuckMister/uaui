import React, { createContext, useContext } from 'react';
import { theme } from '../theme';
import type { Theme } from '../theme/type';
import { deepMerge } from '../utils/copy';

const ThemeContext = createContext<Theme>(theme);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
  customTheme?: Record<string, unknown>;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  customTheme,
}) => {
  const mergedTheme = customTheme ? deepMerge(theme, customTheme) : theme;
  return (
    <ThemeContext.Provider value={mergedTheme}>
      {children}
    </ThemeContext.Provider>
  );
};
