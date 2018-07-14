export default class OrderForm {
  constructor() {
    this.name = '';
    this.address = '';
    this.phone = '';
    this.email = '';
  }

  handleInputChange(input, value) {
    this[input] = value;
  }

  reset() {
    this.name = '';
    this.address = '';
    this.phone = '';
    this.email = '';
  }
}
