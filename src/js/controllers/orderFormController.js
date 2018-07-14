import * as orderFormView from '../views/orderFormView';
import { state, validateOrder } from '../state';

export const handleInputChange = (name, value) => {
  // Set inputs values in model
  state.form.handleInputChange(name, value);
  // Check if form is correct
  validateOrder();
};

export const reset = () => {
  // Reset order form view
  orderFormView.reset();
  state.form.reset();
};
