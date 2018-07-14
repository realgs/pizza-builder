import { elements } from '../base';

export const renderOrder = (order) => {
  const markup = `
    <li class="list-group-item">
      <p class="m-0">Size: ${order.size}</p>
      <p class="m-0">Ingredients: ${order.ingredients}</p>
      <p class="m-0">Price: ${order.total}</p>
      <p class="m-0">Address: ${order.name}, ${order.address}, ${order.phone}, ${order.email}</p>
    </li>
  `;

  elements.orderHistoryList.insertAdjacentHTML('beforeend', markup);
};

export const renderOrders = (orders) => {
  orders.forEach(renderOrder);
};
