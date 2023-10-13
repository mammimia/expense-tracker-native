import { StyleSheet, View } from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';
import { GlobalStyles } from '../../constants/styles';

const expensesData = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14)
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 2, 28)
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2023, 10, 12)
  },
  {
    id: 'e5',
    title: 'New Desk (Glass)',
    amount: 100,
    date: new Date(2023, 10, 12)
  },
  {
    id: 'e6',
    title: 'New Desk (Metal)',
    amount: 150,
    date: new Date(2023, 10, 12)
  },
  {
    id: 'e7',
    title: 'New Desk (Plastic)',
    amount: 200,
    date: new Date(2023, 10, 12)
  },
  {
    id: 'e8',
    title: 'Book',
    amount: 10,
    date: new Date(2023, 10, 12)
  },
  {
    id: 'e9',
    title: 'Banana',
    amount: 1,
    date: new Date(2023, 9, 12)
  }
];

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
