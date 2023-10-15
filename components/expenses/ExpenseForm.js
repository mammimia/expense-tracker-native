import { View, Text, StyleSheet } from 'react-native';
import Input from '../ui/Input';
import { GlobalStyles } from '../../constants/styles';

function ExpenseForm() {
  function titleChangeHandler() {
    console.log('Title changed');
  }

  function amountChangeHandler() {
    console.log('Amount changed');
  }

  function dateChangeHandler() {
    console.log('Date changed');
  }

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputProps={{
            keyboardType: 'decimal-pad',
            onChangeText: amountChangeHandler
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputProps={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: dateChangeHandler
          }}
        />
      </View>
      <Input
        label="Title"
        textInputProps={{ multiline: true, onChangeText: titleChangeHandler }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 80
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary800,
    marginVertical: 16,
    textAlign: 'center'
  },
  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  rowInput: {
    flex: 1
  }
});

export default ExpenseForm;
