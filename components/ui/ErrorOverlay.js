import { StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import Button from './Button';

function ErrorOverlay({ message, onConfirm }) {
  return (
    <View style={styles.rootContainer}>
      <Text style={[styles.text, styles.title]}>Something went wrong!</Text>
      <Text style={styles.text}>{message}</Text>
      <Button onPress={onConfirm}>Okay</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary100
  },
  text: {
    textAlign: 'center',
    marginBottom: 8
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});

export default ErrorOverlay;
