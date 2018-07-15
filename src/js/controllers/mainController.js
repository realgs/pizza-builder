import * as ingredientsController from './ingredientsController';
import * as orderFormController from './orderFormController';
import * as summaryController from './summaryController';
import * as orderHistoryController from './orderHistoryController';
import elements from '../common/elements';
import state from '../state';

document.addEventListener('DOMContentLoaded', () => {
  // Get order history from localStorage and save it in model
  orderHistoryController.getHistory();
  // Render order history in view
  orderHistoryController.renderOrders();
});

elements.orderButton.addEventListener('click', (e) => {
  e.preventDefault();

  // Create new order
  const order = {
    name: state.form.name,
    address: state.form.address,
    phone: state.form.phone,
    email: state.form.email,
    size: state.size,
    ingredients: state.summary.items,
    total: state.summary.total,
  };

  console.log(order.ingredients);

  // Reset order form
  orderFormController.reset();
  // Reset summary
  summaryController.reset();
  // Reset size
  state.size = '';
  // Add new order to model and view
  orderHistoryController.addOrder(order);
  // Save order history
  orderHistoryController.setHistory();
});

elements.orderForm.addEventListener('input', (e) => {
  orderFormController.handleInputChange(e.target.name, e.target.value);
});

elements.summaryList.addEventListener('click', (e) => {
  // Get ingredient data from clicked element attributes
  const name = e.target.attributes['v-summary-name'].value;
  const price = e.target.attributes['v-summary-price'].value;
  // Remove clicked item from summary
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
  // Get size data from clicked element attributes
  const newSize = e.target.id;
  const price = e.target.attributes['v-size-price'].value;

  // Do nothing if new size is same as current size
  if (state.size === newSize) {
    return null;
  }

  if (state.size) {
    summaryController.changeSize(newSize, price);
  } else {
    summaryController.updateSize(newSize, price);
  }
});
