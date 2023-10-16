import axios from 'axios';
import { REACT_APP_API_URL } from '@env';

async function getExpenses() {
  const response = await axios.get(`${REACT_APP_API_URL}/expenses.json`);
  const expenses = [];

  for (const key in response.data) {
    expenses.push({
      id: key,
      ...response.data[key],
      date: new Date(response.data[key].date)
    });
  }

  return expenses;
}

async function addExpense(expenseData) {
  const response = await axios.post(
    `${REACT_APP_API_URL}/expenses.json`,
    expenseData
  );
  return response?.data?.name; // id
}

async function updateExpense(id, expenseData) {
  await axios.patch(`${REACT_APP_API_URL}/expenses/${id}.json`, expenseData);
}

async function deleteExpense(id) {
  await axios.delete(`${REACT_APP_API_URL}/expenses/${id}.json`);
}

export default {
  getExpenses,
  addExpense,
  updateExpense,
  deleteExpense
};
