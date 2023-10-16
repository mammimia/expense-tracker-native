import axios from 'axios';
import { REACT_APP_API_URL } from '@env';

function addExpense(expenseData) {
  axios.post(`${REACT_APP_API_URL}/expenses.json`, expenseData);
}

export default {
  addExpense
};
