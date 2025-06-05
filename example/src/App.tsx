import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-uaui';

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          console.log('Button pressed!');
        }}
        style={{ marginBottom: 20 }}
      >
        <Text>Result: </Text>
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
});
