import { useContext, useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import IconButton from '../components/ui/IconButton';
import { GlobalStyles } from '../constants/styles';
import Button from '../components/ui/Button';
import { ExpensesContext } from '../store/ExpensesContext';
import ExpenseForm from '../components/expenses/ExpenseForm';

function ManageExpenses({ route, navigation }) {
  const { addExpense, updateExpense, deleteExpense } =
    useContext(ExpensesContext);
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    });
  }, [navigation, isEditing]);

  function deleteHandler() {
    navigation.goBack();
    deleteExpense(editedExpenseId);
  }

  function saveHandler() {
    if (isEditing) {
      updateExpense(editedExpenseId, {
        title: 'Updated Title',
        amount: 100,
        date: new Date(2023, 9, 12)
      });
    } else {
      addExpense({
        title: 'New Title',
        amount: 150,
        date: new Date(2023, 9, 13)
      });
    }

    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  return (
    <View style={styles.rootContainer}>
      <ExpenseForm />
      <View style={styles.buttonContainer}>
        <Button style={styles.button} onPress={cancelHandler} mode="flat">
          Cancel
        </Button>
        <Button style={styles.button} onPress={saveHandler}>
          Save
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            size={24}
            color={GlobalStyles.colors.error500}
            onPress={deleteHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary100
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center'
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

export default ManageExpenses;
