import { StyleSheet } from 'react-native';
import ExpensesOutput from '../components/expenses/ExpensesOutput';
import { useContext } from 'react';
import { ExpensesContext } from '../store/ExpensesContext';
import { getDateMinusDays } from '../util/DateUtil';

function RecentExpenses() {
  const { expenses } = useContext(ExpensesContext);
  const recentExpenses = expenses.filter((expense) => {
    const today = new Date();
    const sevenDaysAgo = getDateMinusDays(today, 7);

    return expense.date >= sevenDaysAgo && expense.date <= today;
  });
  return (
    <ExpensesOutput expensesPeriod="Last 7 days" expenses={recentExpenses} />
  );
}

const styles = StyleSheet.create({});

export default RecentExpenses;
