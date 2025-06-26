export type Borders = {
  radius: {
    none: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    full: number;
  };
  width: {
    thin: number;
    medium: number;
    thick: number;
  };
};

export type Spacing = {
  'xs': number;
  'sm': number;
  'md': number;
  'lg': number;
  'xl': number;
  '2xl': number;
  '3xl': number;
};

export type Colors = {
  primary: {
    50: string;
    100: string;
    500: string;
    600: string;
    700: string;
    900: string;
  };
  secondary: {
    50: string;
    500: string;
    700: string;
  };
  success: string;
  warning: string;
  error: string;
  info: string;
  gray: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  white: string;
  black: string;
};

export type Typography = {
  fontSize: {
    'xs': number;
    'sm': number;
    'md': number;
    'lg': number;
    'xl': number;
    '2xl': number;
    '3xl': number;
  };
  fontWeight: {
    normal: string;
    medium: string;
    semibold: string;
    bold: string;
  };
  lineHeight: {
    tight: number;
    normal: number;
    relaxed: number;
  };
};
