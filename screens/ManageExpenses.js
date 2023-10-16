import { useContext, useLayoutEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ExpenseForm from '../components/expenses/ExpenseForm';
import IconButton from '../components/ui/IconButton';
import { GlobalStyles } from '../constants/styles';
import { ExpensesContext } from '../store/ExpensesContext';
import ExpensesService from '../services/ExpensesService';
import LoadingOverlay from '../components/ui/LoadingOverlay';

function ManageExpenses({ route, navigation }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { expenses, addExpense, updateExpense, deleteExpense } =
    useContext(ExpensesContext);
  const editedExpenseId = route.params?.expenseId;
  const selectedExpense = expenses.find(
    (expense) => expense.id === editedExpenseId
  );
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    });
  }, [navigation, isEditing]);

  async function deleteHandler() {
    setIsSubmitting(true);
    await ExpensesService.deleteExpense(editedExpenseId);
    setIsSubmitting(false);
    deleteExpense(editedExpenseId);
    navigation.goBack();
  }

  async function saveHandler(expenseData) {
    setIsSubmitting(true);
    if (isEditing) {
      await ExpensesService.updateExpense(editedExpenseId, expenseData);
      updateExpense(editedExpenseId, expenseData);
    } else {
      const id = await ExpensesService.addExpense(expenseData);
      addExpense({ ...expenseData, id });
    }
    setIsSubmitting(false);

    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  if (isSubmitting) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.rootContainer}>
      <ExpenseForm
        selectedExpense={isEditing ? selectedExpense : null}
        onSubmit={saveHandler}
        onCancel={cancelHandler}
        submitButtonLabel={isEditing ? 'Update' : 'Add'}
      />

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
  }
});

export default ManageExpenses;
