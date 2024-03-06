import Bank from "./bank.js";
import BankAccount from "./bank-account.js";
import CurrentAccount from "./current-account.js";
import SavingsAccount from "./savings-account.js";

try {
  const abstractAccount = new BankAccount();
} catch (e) {
  console.error(e.message);
}

const account = new CurrentAccount();
// try {
//   console.log(account.#id);
// } catch (e) {
//   console.error(e);
// }
console.log(account);
console.log(account.id);
// account.id = "";
// console.log(account.#generateId());
console.log(account.toString());
console.log(account.toJSON());

CurrentAccount.monthlyFee = 10;
console.log(CurrentAccount.toJSON());

CurrentAccount.coolMethod = function () {
  return "Super cool!";
};

console.log(CurrentAccount.coolMethod());
