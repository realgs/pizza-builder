import * as orderFormView from '../views/orderFormView';
import state from '../state';
import validateOrder from '../common/validateOrder';

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
