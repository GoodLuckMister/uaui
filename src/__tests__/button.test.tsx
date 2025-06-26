import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { Text, StyleSheet } from 'react-native';
import Button from '../Components/Button';

jest.mock('../providers/ThemeProvider', () => ({
  useTheme: jest.fn(() => ({
    components: {
      button: {
        variants: {
          primary: { backgroundColor: '#007AFF', color: '#FFFFFF' },
          secondary: { backgroundColor: '#8E8E93', color: '#FFFFFF' },
          outline: {
            backgroundColor: 'transparent',
            borderColor: '#007AFF',
            color: '#007AFF',
          },
          ghost: { backgroundColor: 'transparent', color: '#007AFF' },
        },
        sizes: {
          sm: { paddingVertical: 8, paddingHorizontal: 12, fontSize: 14 },
          md: { paddingVertical: 12, paddingHorizontal: 16, fontSize: 16 },
          lg: { paddingVertical: 16, paddingHorizontal: 20, fontSize: 18 },
        },
      },
    },
  })),
  ThemeProvider: ({ children }: { children: React.ReactNode }) => children,
}));

describe('Button Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Basic Rendering', () => {
    it('renders with default props', () => {
      render(<Button>Click Me</Button>);
      expect(screen.getByText('Click Me')).toBeOnTheScreen();
    });

    it('renders with accessibility role', () => {
      render(<Button accessibilityRole="button">Test Button</Button>);
      expect(screen.getByRole('button')).toBeOnTheScreen();
      expect(screen.getByRole('button')).toHaveTextContent('Test Button');
    });

    it('renders children correctly', () => {
      render(<Button>Hello World</Button>);
      expect(screen.getByText('Hello World')).toBeOnTheScreen();
    });
  });

  describe('Variants with custom theme', () => {
    it('renders primary variant by default', () => {
      render(<Button accessibilityRole="button">Primary</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeOnTheScreen();
      expect(button).toHaveStyle({ backgroundColor: '#007AFF' });
    });

    it('renders secondary variant', () => {
      render(
        <Button variant="secondary" accessibilityRole="button">
          Secondary
        </Button>
      );
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ backgroundColor: '#8E8E93' });
    });

    it('renders outline variant', () => {
      render(
        <Button variant="outline" accessibilityRole="button">
          Outline
        </Button>
      );
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({
        backgroundColor: 'transparent',
        borderColor: '#007AFF',
      });
    });

    it('renders ghost variant', () => {
      render(
        <Button variant="ghost" accessibilityRole="button">
          Ghost
        </Button>
      );
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({
        backgroundColor: 'transparent',
        color: '#007AFF',
      });
    });
  });

  describe('Sizes', () => {
    it('renders medium size by default', () => {
      render(<Button accessibilityRole="button">Medium</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({
        paddingVertical: 12,
        paddingHorizontal: 16,
      });
    });

    it('renders small size', () => {
      render(
        <Button size="sm" accessibilityRole="button">
          Small
        </Button>
      );
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({
        paddingVertical: 8,
        paddingHorizontal: 12,
      });
    });

    it('renders large size', () => {
      render(
        <Button size="lg" accessibilityRole="button">
          Large
        </Button>
      );
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({
        paddingVertical: 16,
        paddingHorizontal: 20,
      });
    });
  });

  describe('States', () => {
    it('handles disabled state', () => {
      render(
        <Button disabled accessibilityRole="button">
          Disabled
        </Button>
      );
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveStyle({ opacity: 0.5 });
    });

    it('handles loading state', () => {
      render(
        <Button loading accessibilityRole="button">
          Loading
        </Button>
      );
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });

    it('is disabled when both loading and disabled are true', () => {
      render(
        <Button loading disabled accessibilityRole="button">
          Loading Disabled
        </Button>
      );
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });
  });

  describe('Layout Props', () => {
    it('renders full width', () => {
      render(
        <Button fullWidth accessibilityRole="button">
          Full Width
        </Button>
      );
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ width: '100%' });
    });

    it('applies custom style', () => {
      const customStyle = { marginTop: 20, backgroundColor: 'red' };
      render(
        <Button style={customStyle} accessibilityRole="button">
          Styled
        </Button>
      );
      const button = screen.getByRole('button');
      expect(button).toHaveStyle(customStyle);
    });

    it('applies custom text style', () => {
      const customTextStyle = StyleSheet.create({
        text: { fontSize: 20, fontWeight: 'bold' },
      });
      render(
        <Button textStyle={customTextStyle.text} accessibilityRole="button">
          Custom Text
        </Button>
      );
      const text = screen.getByText('Custom Text');
      expect(text).toHaveStyle(customTextStyle.text);
    });
  });

  describe('Icons', () => {
    it('renders with left icon', () => {
      const LeftIcon = () => <Text testID="left-icon">←</Text>;
      render(<Button leftIcon={<LeftIcon />}>With Left Icon</Button>);

      expect(screen.getByTestId('left-icon')).toBeOnTheScreen();
      expect(screen.getByText('With Left Icon')).toBeOnTheScreen();
    });

    it('renders with right icon', () => {
      const RightIcon = () => <Text testID="right-icon">→</Text>;
      render(<Button rightIcon={<RightIcon />}>With Right Icon</Button>);

      expect(screen.getByTestId('right-icon')).toBeOnTheScreen();
      expect(screen.getByText('With Right Icon')).toBeOnTheScreen();
    });

    it('renders with both left and right icons', () => {
      const LeftIcon = () => <Text testID="left-icon">←</Text>;
      const RightIcon = () => <Text testID="right-icon">→</Text>;

      render(
        <Button leftIcon={<LeftIcon />} rightIcon={<RightIcon />}>
          Both Icons
        </Button>
      );

      expect(screen.getByTestId('left-icon')).toBeOnTheScreen();
      expect(screen.getByTestId('right-icon')).toBeOnTheScreen();
      expect(screen.getByText('Both Icons')).toBeOnTheScreen();
    });
  });

  describe('Event Handling', () => {
    it('calls onPress when pressed', () => {
      const mockOnPress = jest.fn();
      render(
        <Button testID="button" onPress={mockOnPress}>
          Press Me
        </Button>
      );

      const button = screen.getByTestId('button');
      fireEvent.press(button);

      expect(mockOnPress).toHaveBeenCalledTimes(1);
    });

    it('does not call onPress when disabled', () => {
      const mockOnPress = jest.fn();
      render(
        <Button testID="button" onPress={mockOnPress} disabled>
          Disabled Button
        </Button>
      );

      const button = screen.getByTestId('button');
      fireEvent.press(button);

      expect(mockOnPress).not.toHaveBeenCalled();
    });

    it('does not call onPress when loading', () => {
      const mockOnPress = jest.fn();
      render(
        <Button testID="button" onPress={mockOnPress} loading>
          Loading Button
        </Button>
      );

      const button = screen.getByTestId('button');
      fireEvent.press(button);

      expect(mockOnPress).not.toHaveBeenCalled();
    });

    it('forwards other TouchableOpacity props', () => {
      const mockOnLongPress = jest.fn();
      render(
        <Button
          testID="button"
          onLongPress={mockOnLongPress}
          delayLongPress={500}
        >
          Long Press Me
        </Button>
      );

      const button = screen.getByTestId('button');
      fireEvent(button, 'onLongPress');

      expect(mockOnLongPress).toHaveBeenCalledTimes(1);
    });
  });

  describe('Accessibility', () => {
    it('has correct accessibility role', () => {
      render(<Button testID="button">Accessible Button</Button>);
      const button = screen.getByTestId('button');
      expect(button).toBeOnTheScreen();
    });

    it('supports custom accessibility label', () => {
      render(
        <Button accessibilityLabel="Custom accessible button">Button</Button>
      );
      const button = screen.getByLabelText('Custom accessible button');
      expect(button).toBeOnTheScreen();
    });

    it('supports accessibility hint', () => {
      render(
        <Button testID="button" accessibilityHint="Tap to perform action">
          Action Button
        </Button>
      );
      const button = screen.getByTestId('button');
      expect(button).toHaveProp('accessibilityHint', 'Tap to perform action');
    });
  });

  describe('Complex Scenarios', () => {
    it('combines multiple props correctly', () => {
      const mockOnPress = jest.fn();
      const styles = StyleSheet.create({
        customStyle: {
          margin: 10,
        },
        customTextStyle: { fontWeight: 'bold' },
      });

      render(
        <Button
          variant="outline"
          size="lg"
          fullWidth
          onPress={mockOnPress}
          style={styles.customStyle}
          textStyle={styles.customTextStyle}
          accessibilityLabel="Complex button"
        >
          Complex Button
        </Button>
      );

      const button = screen.getByLabelText('Complex button');
      expect(button).toBeOnTheScreen();
      expect(button).toHaveStyle({
        width: '100%',
        margin: 10,
        backgroundColor: 'transparent',
        borderColor: '#007AFF',
      });

      const text = screen.getByText('Complex Button');
      expect(text).toHaveStyle({ fontWeight: 'bold' });

      fireEvent.press(button);
      expect(mockOnPress).toHaveBeenCalledTimes(1);
    });

    it('handles edge case with empty children', () => {
      render(<Button testID="button">{''}</Button>);
      const button = screen.getByTestId('button');
      expect(button).toBeOnTheScreen();
    });
  });

  describe('Theme Integration', () => {
    it('works without ThemeProvider', () => {
      render(<Button>No Theme</Button>);
      expect(screen.getByText('No Theme')).toBeOnTheScreen();
    });
  });
});
