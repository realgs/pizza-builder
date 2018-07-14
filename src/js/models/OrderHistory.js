export default class OrderHistory {
  constructor() {
    this.items = [];
  }

  saveHistory() {
    localStorage.setItem('orderHistory', JSON.stringify(this.items));
  }

  getHistory() {
    if (localStorage.getItem('orderHistory')) {
      this.items = JSON.parse(localStorage.getItem('orderHistory'));
    }
  }

  addOrder(order) {
    this.items.unshift(order);
  }
}
