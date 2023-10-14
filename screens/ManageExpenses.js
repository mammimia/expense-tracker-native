import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ManageExpenses({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    });
  }, [navigation, isEditing]);

  return (
    <View>
      <Text>ManageExpenses</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default ManageExpenses;
