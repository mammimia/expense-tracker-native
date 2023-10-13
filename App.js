import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import AllExpenses from './screens/AllExpenses';
import ManageExpenses from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';

const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();

const ExpensesOverview = () => (
  <Bottom.Navigator>
    <Bottom.Screen
      name="recent-expenses"
      component={RecentExpenses}
      options={{
        title: 'Recent Expenses'
      }}
    />
    <Bottom.Screen
      name="all-expenses"
      component={AllExpenses}
      options={{
        title: 'All Expenses'
      }}
    />
  </Bottom.Navigator>
);

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="expenses-overview"
            component={ExpensesOverview}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="manage-expenses"
            component={ManageExpenses}
            options={{
              title: 'Manage Expenses'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
