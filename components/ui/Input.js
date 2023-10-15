import { View, Text, StyleSheet, TextInput } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

function Input({ label, textInputProps, style, isValid }) {
  return (
    <View style={[styles.rootContainer, style]}>
      <Text style={[styles.label, !isValid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput
        style={[
          styles.input,
          textInputProps?.multiline && styles.inputMultiline,
          !isValid && styles.invalidInput
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
  },
  invalidLabel: {
    color: GlobalStyles.colors.error500
  },
  invalidInput: {
    backgroundColor: GlobalStyles.colors.error50
  }
});

export default Input;
