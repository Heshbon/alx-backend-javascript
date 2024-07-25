export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(data) {
    this._brand = data;
  }

  get motor() {
    return this._motor;
  }

  set motor(data) {
    this._motor = data;
  }

  get color() {
    return this._color;
  }

  set color(data) {
    this._color = data;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];

    return new Species();
  }
}
