import {
  TouchableOpacity,
  StyleSheet,
  type TouchableOpacityProps,
} from 'react-native';

export type ButtonComponent = (
  props: TouchableOpacityProps
) => React.ReactElement;

const Button: ButtonComponent = ({ children, style, ...rest }) => {
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
