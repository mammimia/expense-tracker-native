import { View, Text, StyleSheet } from 'react-native';
import Input from '../ui/Input';
import { GlobalStyles } from '../../constants/styles';
import { useState } from 'react';
import Button from '../ui/Button';

function ExpenseForm({ onSubmit, onCancel, submitButtonLabel }) {
  const [form, setForm] = useState({
    title: '',
    amount: '',
    date: ''
  });

  function inputChangeHandler(inputName, inputValue) {
    setForm((prevForm) => ({ ...prevForm, [inputName]: inputValue }));
  }

  function saveHandler() {
    const expenseData = {
      title: form.title,
      amount: +form.amount,
      date: new Date(form.date)
    };

    onSubmit(expenseData);
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
            onChangeText: inputChangeHandler.bind(this, 'amount'),
            value: form.amount
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputProps={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, 'date'),
            value: form.date
          }}
        />
      </View>
      <Input
        label="Title"
        textInputProps={{
          multiline: true,
          onChangeText: inputChangeHandler.bind(this, 'title'),
          value: form.title
        }}
      />
      <View style={styles.buttonContainer}>
        <Button style={styles.button} onPress={onCancel} mode="flat">
          Cancel
        </Button>
        <Button style={styles.button} onPress={saveHandler}>
          {submitButtonLabel}
        </Button>
      </View>
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
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8
  }
});

export default ExpenseForm;
