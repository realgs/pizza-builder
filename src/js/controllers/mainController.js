import * as ingredientsController from './ingredientsController';
import * as orderFormController from './orderFormController';
import * as summaryController from './summaryController';
import * as orderHistoryController from './orderHistoryController';
import { elements } from '../base';
import { state } from '../state';

document.addEventListener('DOMContentLoaded', () => {
  // Get history from localStorage and save it in model
  orderHistoryController.getHistory();
  // Render orders history in view
  orderHistoryController.renderOrders();
});

elements.orderButton.addEventListener('click', (e) => {
  e.preventDefault();

  const order = {
    name: state.form.name,
    address: state.form.address,
    phone: state.form.phone,
    email: state.form.email,
    size: state.size,
    ingredients: state.summary.items,
    total: state.summary.total,
  };

  orderFormController.reset();
  summaryController.reset();
  state.size = '';


  orderHistoryController.addOrder(order);
  orderHistoryController.setHistory();
});

elements.orderForm.addEventListener('input', (e) => {
  orderFormController.handleInputChange(e.target.name, e.target.value);
});

elements.summaryList.addEventListener('click', (e) => {
  const name = e.target.attributes['v-summary-name'].value;
  const price = e.target.attributes['v-summary-price'].value;

  summaryController.removeItem(name, price);
});

// Listen for input changes on ingredients search input
elements.ingredientsSearch.addEventListener('input', (e) => {
  ingredientsController.handleSearch(e.target.value);
});

// Listen for click events on ingredients list
elements.ingredientsList.addEventListener('click', (e) => {
  // Get ingredient data from clicked element attributes
  const name = e.target.attributes['v-ingredient-name'].value;
  const price = e.target.attributes['v-ingredient-price'].value;

  summaryController.handleAddIngredient(name, price);
});

elements.sizeList.addEventListener('click', (e) => {
  const newSize = e.target.id;
  const price = e.target.attributes['v-size-price'].value;

  if (state.size === newSize) {
    return null;
  }

  if (state.size) {
    summaryController.changeSize(newSize, price);
  } else {
    summaryController.updateSize(newSize, price);
  }
});
