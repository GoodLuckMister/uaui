import React, { createContext, useContext } from 'react';
import { theme } from '../theme';
import type { Theme } from '../theme/type';

const ThemeContext = createContext<Theme>(theme);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

// Deep merge utility function
function deepMerge<T extends Record<string, any>>(target: T, source: any): T {
  const result = { ...target } as any;

  for (const key in source) {
    if (
      source[key] &&
      typeof source[key] === 'object' &&
      !Array.isArray(source[key])
    ) {
      result[key] = deepMerge(result[key], source[key] as any);
    } else if (source[key] !== undefined) {
      result[key] = source[key] as any;
    }
  }

  return result;
}

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
