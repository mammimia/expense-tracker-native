import { View, Text, StyleSheet, Alert } from 'react-native';
import Input from '../ui/Input';
import { GlobalStyles } from '../../constants/styles';
import { useState } from 'react';
import Button from '../ui/Button';
import { formatDate } from '../../util/DateUtil';

function ExpenseForm({
  selectedExpense,
  onSubmit,
  onCancel,
  submitButtonLabel
}) {
  const [form, setForm] = useState({
    title: {
      value: selectedExpense?.title || '',
      isValid: true
    },
    amount: {
      value: selectedExpense?.amount.toString() || '',
      isValid: true
    },
    date: {
      value: formatDate(selectedExpense?.date) || new Date().toISOString(),
      isValid: true
    }
  });

  function inputChangeHandler(inputName, inputValue) {
    setForm((prevForm) => ({
      ...prevForm,
      [inputName]: { value: inputValue, isValid: true }
    }));
  }

  function saveHandler() {
    const expenseData = {
      title: form.title.value,
      amount: +form.amount.value,
      date: new Date(form.date.value)
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
    const titleIsValid = expenseData.title.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !titleIsValid) {
      setForm((prevForm) => ({
        ...prevForm,
        title: { ...prevForm.title, isValid: titleIsValid },
        amount: { ...prevForm.amount, isValid: amountIsValid },
        date: { ...prevForm.date, isValid: dateIsValid }
      }));

      return;
    }

    onSubmit(expenseData);
  }

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          isValid={form.amount.isValid}
          textInputProps={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChangeHandler.bind(this, 'amount'),
            value: form.amount.value
          }}
        />
        <Input
          style={styles.rowInput}
          isValid={form.date.isValid}
          label="Date"
          textInputProps={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, 'date'),
            value: form.date.value
          }}
        />
      </View>
      <Input
        label="Title"
        isValid={form.title.isValid}
        textInputProps={{
          multiline: true,
          onChangeText: inputChangeHandler.bind(this, 'title'),
          value: form.title.value
        }}
      />
      {(!form.title.isValid || !form.amount.isValid || !form.date.isValid) && (
        <Text style={styles.errorText}>
          Please enter a valid title, amount and date.
        </Text>
      )}
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
  },
  errorText: {
    color: GlobalStyles.colors.error500,
    textAlign: 'center',
    margin: 8
  }
});

export default ExpenseForm;
