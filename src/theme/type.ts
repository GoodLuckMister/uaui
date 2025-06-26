import type { Colors, Spacing, Typography, Borders } from './tokens/types';

type VariantStyle = {
  backgroundColor?: string;
  color?: string;
  borderColor?: string;
  borderWidth?: number;
};
type Variant = VariantStyle & {
  primary?: VariantStyle;
  secondary?: VariantStyle;
  outline?: VariantStyle;
  ghost?: VariantStyle;
};

type SizeStyle = {
  paddingVertical?: number;
  paddingHorizontal?: number;
  fontSize?: number;
  borderRadius?: number;
};

type Size = {
  sm?: SizeStyle;
  md?: SizeStyle;
  lg?: SizeStyle;
};

type Components = {
  button?: {
    variants?: Variant;
    sizes?: Size;
  };
};

export type Theme = {
  colors?: Colors;
  spacing?: Spacing;
  typography?: Typography;
  borders?: Borders;
  components?: Components;
};
