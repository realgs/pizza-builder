import { elements } from '../base';

export const addNewItem = (item, count, price) => {
  const markup = `
    <li
      class="list-group-item d-flex justify-content-between align-items-center text-capitalize cursor-pointer"
      v-summary-name=${item}
      v-summary-price=${price}
    >
      ${item} <span class="badge badge-primary badge-pill">${count}</span>
    </li>
  `;

  elements.summaryList.insertAdjacentHTML('beforeend', markup);
};

export const removeItem = (item) => {
  document.querySelector(`[v-summary-name="${item}"]`).remove();
};

export const addExistingItem = (item, count) => {
  document.querySelector(`[v-summary-name="${item}"]`).innerHTML = `${item} <span class="badge badge-primary badge-pill">${count}</span>`;
};

export const updateExistingItem = (item, count) => {
  document.querySelector(`[v-summary-name="${item}"]`).innerHTML = `${item} <span class="badge badge-primary badge-pill">${count}</span>`;
};

export const updateTotalPrice = (totalPrice) => {
  elements.totalPrice.innerHTML = `${totalPrice}$`;
};

export const updateSize = (size) => {
  elements.summarySize.innerHTML = size;
};

export const reset = () => {
  updateTotalPrice(0);
  updateSize('');

  while (elements.summaryList.children.length > 0) {
    elements.summaryList.removeChild(elements.summaryList.children[0]);
  }
};
