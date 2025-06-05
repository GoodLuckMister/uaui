import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-uaui';

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          console.log('Button pressed!');
        }}
        style={styles.button}
      >
        <Text style={styles.text}>Result: </Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: 'purple',
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});
