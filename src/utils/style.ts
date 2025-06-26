import type { ViewStyle } from 'react-native';
import { theme } from '../theme';

export type SpacingKey = keyof typeof theme.spacing;
export type ColorKey = keyof typeof theme.colors;

export const createSpacing = (value: SpacingKey) => theme.spacing[value];

export const createMargin = (value: SpacingKey): ViewStyle => ({
  margin: theme.spacing[value],
});

export const createPadding = (value: SpacingKey): ViewStyle => ({
  padding: theme.spacing[value],
});

export const createShadow = (elevation: number): ViewStyle => ({
  shadowColor: theme.colors.black,
  shadowOffset: {
    width: 0,
    height: elevation / 2,
  },
  shadowOpacity: 0.1,
  shadowRadius: elevation,
  elevation, // Android
});

// Style composition utility
export const composeStyles = (...styles: unknown[]): Record<string, unknown> =>
  Object.assign({}, ...styles.filter(Boolean));
