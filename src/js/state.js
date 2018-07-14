import { elements } from './base';
import OrderForm from './models/OrderForm';
import Ingredients from './models/Ingredients';
import Summary from './models/Summary';
import OrderHistory from './models/OrderHistory';

export const state = {
  form: new OrderForm(),
  ingredients: new Ingredients(),
  summary: new Summary(),
  size: '',
  orderHistory: new OrderHistory(),
};

export const validateOrder = () => {
  if (state.size && state.form.name && Object.keys(state.summary.items).length > 0 && state.form.address && state.form.phone && state.form.email) {
    elements.orderButton.disabled = false;
  } else {
    elements.orderButton.disabled = true;
  }
};
