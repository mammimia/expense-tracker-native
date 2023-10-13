import { FlatList, StyleSheet, Text } from 'react-native';

function ExpenseItem({ item }) {
  return <Text>{item.title}</Text>;
}

function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={ExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({});

export default ExpensesList;
