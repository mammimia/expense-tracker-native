import { createContext, useReducer } from 'react';
import { expensesData } from '../data/ExpensesData';

const EXPENSE_ACTION_TYPES = {
  ADD: 'ADD',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
  SET: 'SET'
};

export const ExpensesContext = createContext({
  expenses: [],
  setExpenses: (expenses) => {},
  addExpense: ({ title, amount, date }) => {},
  updateExpense: (id, { title, amount, date }) => {},
  deleteExpense: (id) => {}
});

function expensesReducer(state, action) {
  switch (action.type) {
    case EXPENSE_ACTION_TYPES.ADD:
      return [...state, action.payload];
    case EXPENSE_ACTION_TYPES.UPDATE:
      const updatedExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );

      if (updatedExpenseIndex === -1) return;
      const updatedExpense = {
        ...state[updatedExpenseIndex],
        ...action.payload.expenseData
      };

      const updatedExpenses = [...state];
      updatedExpenses[updatedExpenseIndex] = updatedExpense;
      return updatedExpenses;
    case EXPENSE_ACTION_TYPES.DELETE:
      return state.filter((expense) => expense.id !== action.payload);
    case EXPENSE_ACTION_TYPES.SET:
      return action.payload?.reverse();
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, expensesData);

  function addExpense(expenseData) {
    dispatch({
      type: EXPENSE_ACTION_TYPES.ADD,
      payload: expenseData
    });
  }

  function updateExpense(id, expenseData) {
    dispatch({
      type: EXPENSE_ACTION_TYPES.UPDATE,
      payload: { id, expenseData }
    });
  }

  function deleteExpense(id) {
    dispatch({
      type: EXPENSE_ACTION_TYPES.DELETE,
      payload: id
    });
  }

  function setExpenses(expenses) {
    dispatch({
      type: EXPENSE_ACTION_TYPES.SET,
      payload: expenses
    });
  }

  return (
    <ExpensesContext.Provider
      value={{
        expenses: expensesState,
        addExpense,
        updateExpense,
        deleteExpense,
        setExpenses
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
