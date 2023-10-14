import { createContext, useReducer } from 'react';
import { expensesData } from '../data/ExpensesData';

const EXPENSE_ACTION_TYPES = {
  ADD: 'ADD',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE'
};

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ title, amount, date }) => {},
  updateExpense: (id, { title, amount, date }) => {},
  deleteExpense: (id) => {}
});

function expensesReducer(state, action) {
  switch (action.type) {
    case EXPENSE_ACTION_TYPES.ADD:
      const id = new Date().getTime().toString() + Math.random().toString();
      return [...state, { ...action.payload, id }];
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

  return (
    <ExpensesContext.Provider
      value={{
        expenses: expensesState,
        addExpense,
        updateExpense,
        deleteExpense
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
