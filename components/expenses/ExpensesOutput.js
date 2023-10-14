import { StyleSheet, View } from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';
import { GlobalStyles } from '../../constants/styles';
import { expensesData } from '../../data/ExpensesData';

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.rootContainer}>
      <ExpensesSummary expenses={expensesData} periodName={expensesPeriod} />
      <ExpensesList expenses={expensesData} />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary200
  }
});

export default ExpensesOutput;
