import { StyleSheet } from 'react-native';
import ExpensesOutput from '../components/expenses/ExpensesOutput';

function AllExpenses() {
  return <ExpensesOutput expensesPeriod="Total" />;
}

const styles = StyleSheet.create({});

export default AllExpenses;
