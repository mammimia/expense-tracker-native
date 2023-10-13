import { FlatList, StyleSheet, Text } from 'react-native';
import ExpenseItem from './ExpenseItem';

function renderExpenseItem({ item }) {
  return <ExpenseItem item={item} />;
}

function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpensesList;
