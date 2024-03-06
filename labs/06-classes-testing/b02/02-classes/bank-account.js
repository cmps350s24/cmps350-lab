import { nanoid } from "nanoid";

export default class BankAccount {
  #id;
  _balance;

  constructor(balance = 0.0) {
    if (this.constructor === BankAccount) {
      throw new Error("Abstract classes cannot be instantiated.");
    }

    this.#id = this.#generateId();
    this._balance = balance;
  }

  get id() {
    return this.#id;
  }

  get balance() {
    return this._balance;
  }

  // set balance(amount) {
  //   this._balance = amount;
  // }

  deposit(amount) {
    if (amount < 0) {
      return;
    }
    this._balance += amount;
  }

  withdraw(amount) {
    if (amount < 0) {
      return;
    }

    if (this._balance >= amount) {
      this._balance -= amount;
    } else {
      throw new Error("Insufficient balance!");
    }
  }

  toString() {
    return `ID: ${this.#id}. Balance: ${this._balance}.`;
  }

  toJSON() {
    return {
      id: this.#id,
      balance: this._balance,
    };
  }

  toHTML() {
    // return `<tr><td></td></tr>`
  }

  #generateId() {
    return nanoid();
  }
}
