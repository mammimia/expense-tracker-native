import { useContext, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import ExpensesOutput from '../components/expenses/ExpensesOutput';
import ExpensesService from '../services/ExpensesService';
import { ExpensesContext } from '../store/ExpensesContext';
import { getDateMinusDays } from '../util/DateUtil';
import LoadingOverlay from '../components/ui/LoadingOverlay';

function RecentExpenses() {
  const [isFetching, setIsFetching] = useState(false);
  const { expenses, setExpenses } = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      const expensesResponse = await ExpensesService.getExpenses();
      setExpenses(expensesResponse);
      setIsFetching(false);
    }

    getExpenses();
  }, []);

  if (isFetching) {
    return <LoadingOverlay />;
  }

  if (!expenses) {
    return null;
  }

  const recentExpenses = expenses?.filter((expense) => {
    const today = new Date();
    const sevenDaysAgo = getDateMinusDays(today, 7);

    return expense.date >= sevenDaysAgo && expense.date <= today;
  });
  return (
    <ExpensesOutput
      expensesPeriod="Last 7 days"
      expenses={recentExpenses}
      fallbackText="No expense registered for the last 7 days."
    />
  );
}

const styles = StyleSheet.create({});

export default RecentExpenses;
