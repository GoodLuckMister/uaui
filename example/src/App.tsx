import { View, StyleSheet } from 'react-native';
import { Button, ThemeProvider } from 'react-native-uaui';

const theme = {
  components: {
    button: {
      variants: {
        primary: {
          backgroundColor: 'red',
          color: 'white',
        },
        secondary: {
          backgroundColor: 'blue',
          color: 'white',
        },
        outline: {
          backgroundColor: 'transparent',
          borderColor: 'black',
          borderWidth: 1,
          color: 'black',
        },
        ghost: {
          backgroundColor: 'transparent',
          color: 'gray',
        },
      },
    },
  },
};

export default function App() {
  return (
    <ThemeProvider customTheme={theme}>
      <View style={styles.container}>
        <Button>Primary Button</Button>

        <Button variant="secondary" size="md" style={styles.secondaryButton}>
          Secondary Button
        </Button>

        <Button variant="outline" size="sm" style={styles.secondaryButton}>
          Outline Button
        </Button>

        <Button variant="ghost" size="lg" style={styles.secondaryButton}>
          Ghost Button
        </Button>
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  secondaryButton: {
    marginTop: 16,
  },
});
