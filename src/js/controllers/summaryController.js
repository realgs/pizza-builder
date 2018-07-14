import * as summaryView from '../views/summaryView';
import { state, validateOrder } from '../state';

export const removeItem = (name, price) => {
  // Remove ingredient from summary model
  state.summary.removeItem(name);
  // Update summary total price in model
  state.summary.updateTotal(parseInt(price * -1, 10));

  // Update summary total price in view
  summaryView.updateTotalPrice(state.summary.total);
  // Update summary ingredients in view
  // If added ingredient already exists, change only its count
  if (state.summary.items[name] >= 1) {
    summaryView.updateExistingItem(name, state.summary.items[name]);
    // If added ingredient does not exists, add new
  } else {
    summaryView.removeItem(name, 1);
  }
  validateOrder();
};

export const handleAddIngredient = (name, price) => {
  // Update summary total price in model and view
  state.summary.updateTotal(parseInt(price, 10));
  summaryView.updateTotalPrice(state.summary.total);

  // Add ingredient to summary model
  state.summary.addItem(name);

  // If added ingredient already exists, change only its count
  if (state.summary.items[name] > 1) {
    summaryView.addExistingItem(name, state.summary.items[name]);
    // If added ingredient does not exists, add new
  } else {
    summaryView.addNewItem(name, 1, price);
  }

  validateOrder();
};

export const reset = () => {
  state.summary.reset();
  summaryView.reset();
};

export const changeSize = (newSize, price) => {
  const currentSizePrice = document.querySelector(`#${state.size}`).attributes['v-size-price'].value;
  state.summary.updateTotal(parseInt(currentSizePrice * -1, 10));
  summaryView.updateTotalPrice(state.summary.total);
  // Set new size in state
  state.size = newSize;
  // Add new size price to summary model and view
  state.summary.updateTotal(parseInt(price, 10));
  summaryView.updateTotalPrice(state.summary.total);
  summaryView.updateSize(state.size);
};

export const updateSize = (newSize, price) => {
  // Set new size in state
  state.size = newSize;
  // Add new size price to summary model and view
  state.summary.updateTotal(parseInt(price, 10));
  summaryView.updateTotalPrice(state.summary.total);
  summaryView.updateSize(state.size);
};
