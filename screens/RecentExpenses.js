import { StyleSheet } from 'react-native';
import ExpensesOutput from '../components/expenses/ExpensesOutput';

function RecentExpenses() {
  return <ExpensesOutput expensesPeriod="Recent" />;
}

const styles = StyleSheet.create({});

export default RecentExpenses;
