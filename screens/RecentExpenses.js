import { StyleSheet } from 'react-native';
import ExpensesOutput from '../components/expenses/ExpensesOutput';

function RecentExpenses() {
  return <ExpensesOutput expensesPeriod="Last 7 days" />;
}

const styles = StyleSheet.create({});

export default RecentExpenses;
