import BankAccount from "./bank-account.js";

export default class SavingsAccount extends BankAccount {
  static #monthlyBenefit = 0.05;
}
