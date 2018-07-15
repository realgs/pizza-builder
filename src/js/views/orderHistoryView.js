import elements from '../common/elements';

export const renderOrder = (order) => {
  const ingredientsList = [];

  for (let i = 0; i < Object.keys(order.ingredients).length; i++) {
    ingredientsList.push(`
    <span class="text-capitalize">${Object.keys(order.ingredients)[i]}</span>
    <span class="font-weight-bold">(${order.ingredients[Object.keys(order.ingredients)[i]]})</span>
    `);
  }

  const markup = `
    <li class="list-group-item">
      <p class="m-0">Size: <span class="text-capitalize font-weight-bold">${order.size}</span></p>
      <p class="m-0">Ingredients: ${ingredientsList.join(', ')}</p>
      <p class="m-0">Total price: ${order.total}$</p>
      <p class="m-0">Customer: ${order.name}, ${order.address}, ${order.phone}, ${order.email}</p>
    </li>
  `;

  elements.orderHistoryList.insertAdjacentHTML('beforeend', markup);
};

export const renderOrders = (orders) => {
  orders.forEach(renderOrder);
};
