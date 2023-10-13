import { FlatList, StyleSheet, Text } from 'react-native';
import ExpenseItem from './ExpenseItem';

function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={ExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpensesList;
