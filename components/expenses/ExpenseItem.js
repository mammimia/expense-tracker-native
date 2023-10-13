import { View, Text, StyleSheet, Pressable } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import { formatDate } from '../../util/DateUtil';
import { useNavigation } from '@react-navigation/native';

function ExpenseItem({ item }) {
  const navigation = useNavigation();

  function expensePressHandler() {
    navigation.navigate('manage-expenses', { expenseId: item.id });
  }

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && GlobalStyles.pressed}
    >
      <View style={[styles.rootContainer, GlobalStyles.card]}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {item.title}
          </Text>
          <Text style={styles.textBase}>{formatDate(item.date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>${item.amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textBase: {
    color: GlobalStyles.colors.primary50
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold'
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    minWidth: 80
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: 'bold'
  }
});

export default ExpenseItem;
