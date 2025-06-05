import {
  TouchableOpacity,
  StyleSheet,
  type TouchableOpacityProps,
} from 'react-native';

const Button = ({ children, style, ...rest }: TouchableOpacityProps) => {
  return (
    <TouchableOpacity style={[styles.button, style]} {...rest}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default Button;
