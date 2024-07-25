import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(data) {
    if (typeof data !== 'number') throw TypeError('amount must be a number');
    this._amount = data;
  }

  set currency(data) {
    if (!(data instanceof Currency)) throw TypeError('currency must be a Currency');
    this._currency = data;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
