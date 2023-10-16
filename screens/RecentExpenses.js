import { useContext, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import ExpensesOutput from '../components/expenses/ExpensesOutput';
import ExpensesService from '../services/ExpensesService';
import { ExpensesContext } from '../store/ExpensesContext';
import { getDateMinusDays } from '../util/DateUtil';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import ErrorOverlay from '../components/ui/ErrorOverlay';

function RecentExpenses() {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const { expenses, setExpenses } = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      try {
        const expensesResponse = await ExpensesService.getExpenses();
        setExpenses(expensesResponse);
      } catch (error) {
        setError("Couldn't fetch expenses.");
      }
      setIsFetching(false);
    }

    getExpenses();
  }, []);

  if (error && !isFetching) {
    return <ErrorOverlay message={error} onConfirm={() => setError(null)} />;
  }

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
