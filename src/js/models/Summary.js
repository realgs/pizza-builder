export default class Summary {
  constructor() {
    this.items = {};
    this.total = 0;
  }

  addItem(item) {
    if (this.items[item]) {
      this.items[item]++;
    } else {
      this.items[item] = 1;
    }
  }

  removeItem(item) {
    if (this.items[item] > 1) {
      this.items[item]--;
    } else {
      delete this.items[item];
    }
  }

  updateTotal(value) {
    this.total = this.total + value;
  }

  reset() {
    this.total = 0;
    this.items = {};
  }
}
