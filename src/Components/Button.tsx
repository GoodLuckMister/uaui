import {
  TouchableOpacity,
  Text,
  StyleSheet,
  type TouchableOpacityProps,
  type ViewStyle,
  type TextStyle,
} from 'react-native';
import { useTheme } from '../providers/ThemeProvider';
import { composeStyles, createShadow } from '../utils/style';

export interface ButtonProps extends TouchableOpacityProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  children,
  style,
  textStyle,
  ...rest
}) => {
  const theme = useTheme();
  const variantStyles = theme?.components?.button?.variants?.[variant] ?? {};
  const sizeStyles = theme?.components?.button?.sizes?.[size] ?? {};

  const buttonStyle = composeStyles(
    styles.base,
    variantStyles,
    sizeStyles,
    fullWidth && styles.fullWidth,
    disabled && styles.disabled,
    style
  );

  const textStyles = composeStyles(
    styles.text,
    { color: variantStyles.color },
    { fontSize: sizeStyles.fontSize },
    disabled && styles.disabledText,
    textStyle
  );

  return (
    <TouchableOpacity
      style={buttonStyle}
      disabled={disabled || loading}
      activeOpacity={0.7}
      {...rest}
    >
      {leftIcon}
      <Text style={textStyles}>{children}</Text>
      {rightIcon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    ...createShadow(2),
  },
  fullWidth: {
    width: '100%',
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    textAlign: 'center',
  },
  disabledText: {
    opacity: 0.7,
  },
});

export default Button;
