import BankAccount from "./bank-account.js";
import CurrentAccount from "./current-account.js";
import SavingsAccount from "./savings-account.js";

const account = new CurrentAccount();
console.log(account);
// account.#id = "";
console.log(account.id);
// account.id = "";

console.log(account.toString());
console.log(JSON.stringify(account));
// CurrentAccount.monthlyFee = 10;
console.log(JSON.stringify(CurrentAccount));

BankAccount.hello = function () {
  console.log("hello!");
};
account.__proto__.helloAgain = function () {
  console.log("hello again!");
};

CurrentAccount.hello();
// account.hello();
account.helloAgain();

const account2 = new CurrentAccount();
account2.helloAgain();
