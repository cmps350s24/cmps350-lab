import { nanoid } from "nanoid";

export default class BankAccount {
  #id;
  #balance;

  constructor(balance = 0.0) {
    if (this.constructor === BankAccount) {
      throw new Error("Abstract classes cannot be instantiated.");
    }

    this.#id = BankAccount.#generateId();
    this.#balance = balance;
  }

  get id() {
    return this.#id;
  }

  // set id(id) {
  //   this.#id = id;
  // }

  get balance() {
    return this.#balance;
  }

  deposit(amount) {
    if (amount <= 0.0) {
      return;
    }

    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount <= 0.0) {
      return;
    }

    if (this.#balance >= amount) {
      this.#balance -= amount;
    }
  }

  toString() {
    return `ID: ${this.#id}. Balance: ${this.#balance}.`;
  }

  toJSON() {
    return {
      id: this.#id,
      balance: this.#balance,
    };
  }

  static #generateId() {
    return nanoid(10);
  }
}
