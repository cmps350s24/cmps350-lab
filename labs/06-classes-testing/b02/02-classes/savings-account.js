import BankAccount from "./bank-account.js";

export default class SavingsAccount extends BankAccount {
  static #monthlyBenefit = 0.05;

  constructor(balance = 0.0) {
    super(balance);
  }

  distributeBenefit() {
    this._balance *= 1 + SavingsAccount.#monthlyBenefit;
  }

  toString() {
    return `Type: Savings. ${super.toString()} Fee: ${
      SavingsAccount.#monthlyBenefit
    }.`;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      type: "savings",
      monthlyBenefit: SavingsAccount.#monthlyBenefit,
    };
  }
}
