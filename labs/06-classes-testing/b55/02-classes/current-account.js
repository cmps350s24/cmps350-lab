import BankAccount from "./bank-account.js";

export default class CurrentAccount extends BankAccount {
  static #monthlyFee = 3;

  constructor(balance) {
    super(balance);
  }

  deductFee() {}

  toString() {
    return `${super.toString()}. Type: Current. Monthly Fee: ${
      CurrentAccount.#monthlyFee
    }.`;
  }

  toJSON() {
    return { ...super.toJSON(), type: "current" };
  }

  static toJSON() {
    return { monthlyFee: this.#monthlyFee };
  }

  static set monthlyFee(fee) {
    CurrentAccount.#monthlyFee = fee;
  }
}
