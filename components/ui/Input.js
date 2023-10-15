import { View, Text, StyleSheet, TextInput } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

function Input({ label, textInputProps, style }) {
  return (
    <View style={[styles.rootContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[
          styles.input,
          textInputProps?.multiline && styles.inputMultiline
        ]}
        {...textInputProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginHorizontal: 4,
    marginVertical: 8
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary700,
    marginBottom: 4
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary50,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: GlobalStyles.colors.primary700
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top'
  }
});

export default Input;
