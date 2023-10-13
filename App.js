import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import AllExpenses from './screens/AllExpenses';
import ManageExpenses from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';
import { GlobalStyles } from './constants/styles';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();

const ExpensesOverview = () => (
  <Bottom.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: GlobalStyles.colors.primary500
      },
      headerTintColor: 'white',
      tabBarStyle: {
        backgroundColor: GlobalStyles.colors.primary500
      }
    }}
  >
    <Bottom.Screen
      name="recent-expenses"
      component={RecentExpenses}
      options={{
        title: 'Recent Expenses',
        tabBarLabel: 'Recent',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="hourglass" color={color} size={size} />
        )
      }}
    />
    <Bottom.Screen
      name="all-expenses"
      component={AllExpenses}
      options={{
        title: 'All Expenses',
        tabBarLabel: 'All',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="calendar" color={color} size={size} />
        )
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
