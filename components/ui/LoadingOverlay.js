import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

function LoadingOverlay() {
  return (
    <View style={styles.rootContainer}>
      <ActivityIndicator size="large" color="white" />
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
  }
});

export default LoadingOverlay;
