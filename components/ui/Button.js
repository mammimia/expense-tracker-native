import { View, Text, StyleSheet, Pressable } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

function Button({ children, onPress, mode, style }) {
  return (
    <View style={style}>
      <Pressable
        style={({ pressed }) =>
          pressed && [styles.pressed, GlobalStyles.pressed]
        }
        onPress={onPress}
      >
        <View style={[styles.rootContainer, mode === 'flat' && styles.flat]}>
          <Text
            style={[
              styles.buttonText,
              mode === 'flat' && styles.flatButtonText
            ]}
          >
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500
  },
  flat: {
    backgroundColor: 'transparent'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  flatButtonText: {
    color: GlobalStyles.colors.primary700
  },
  pressed: {
    backgroundColor: GlobalStyles.colors.primary200
  }
});

export default Button;
