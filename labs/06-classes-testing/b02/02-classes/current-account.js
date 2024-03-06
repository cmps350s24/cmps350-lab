import BankAccount from "./bank-account.js";

export default class CurrentAccount extends BankAccount {
  static #monthlyFee = 10;

  constructor(balance = 0.0) {
    super(balance);
  }

  deductFee() {
    this._balance -= CurrentAccount.#monthlyFee;
  }

  toString() {
    return `Type: Current. ${super.toString()} Fee: ${
      CurrentAccount.#monthlyFee
    }.`;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      type: "current",
      monthlyFee: CurrentAccount.#monthlyFee,
    };
  }
}
