import { StyleSheet } from 'react-native';
import ExpensesOutput from '../components/expenses/ExpensesOutput';
import { useContext } from 'react';
import { ExpensesContext } from '../store/ExpensesContext';

function AllExpenses() {
  const { expenses } = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expensesPeriod="Total"
      expenses={expenses}
      fallbackText="No registered expenses found!"
    />
  );
}

const styles = StyleSheet.create({});

export default AllExpenses;
