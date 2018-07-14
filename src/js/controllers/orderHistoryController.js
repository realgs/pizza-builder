import * as orderHistoryView from '../views/orderHistoryView';
import { state } from '../state';

export const addOrder = (order) => {
  state.orderHistory.addOrder(order);
  orderHistoryView.renderOrder(order);
};

export const getHistory = () => {
  state.orderHistory.getHistory();
};

export const setHistory = () => {
  state.orderHistory.saveHistory();
};

export const renderOrders = () => {
  orderHistoryView.renderOrders(state.orderHistory.items);
};
