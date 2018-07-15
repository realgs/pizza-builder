import OrderForm from './models/OrderForm';
import Ingredients from './models/Ingredients';
import Summary from './models/Summary';
import OrderHistory from './models/OrderHistory';

export default {
  form: new OrderForm(),
  ingredients: new Ingredients(),
  summary: new Summary(),
  orderHistory: new OrderHistory(),
  size: '',
};
