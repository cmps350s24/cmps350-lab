import BankAccount from "./bank-account.js";

export default class SavingsAccount extends BankAccount {
  static #monthlyBenefit;

  constructor(balance) {
    super(balance);
  }

  toString() {
    return `${super.toString()} Type: Savings.`;
  }
}
