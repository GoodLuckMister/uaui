# react-native-uaui

React Native Components

## Installation

```sh
npm install react-native-uaui
```

## Usage

```js
import { Button, ThemeProvider } from 'react-native-uaui';

const theme = {
  components: {
    button: {
      variants: {
        primary: {
          backgroundColor: 'red',
          color: 'white',
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
    </ThemeProvider>
  );
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
