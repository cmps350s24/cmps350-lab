import BankAccount from "./bank-account.js";

export default class CurrentAccount extends BankAccount {
  static #monthlyFee = 0;

  constructor(balance) {
    super(balance);
  }

  toString() {
    return `${super.toString()} Type: Current.`;
  }

  toJSON() {
    return { ...super.toJSON(), type: "current" };
  }

  static toJSON() {
    return { monthlyFee: CurrentAccount.#monthlyFee };
  }

  static get monthlyFee() {
    return CurrentAccount.#monthlyFee;
  }

  static set monthlyFee(fee) {
    if (fee < 0) {
      throw new Error("Fee must be positive");
    }
    CurrentAccount.#monthlyFee = fee;
  }

  static fromJSON(object) {
    return new CurrentAccount(); // how to get ID inside?
  }
}
