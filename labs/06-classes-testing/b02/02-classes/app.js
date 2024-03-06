import Bank from "./bank.js";
// import BankAccount from "./bank-account.js";
import CurrentAccount from "./current-account.js";
import SavingsAccount from "./savings-account.js";

// const bankAccount = new BankAccount();
const currentAccount = new CurrentAccount();
const savingsAccount = new SavingsAccount();

console.log(currentAccount.toString());
console.log(savingsAccount.toString());

console.log(currentAccount);
console.log(JSON.stringify(currentAccount));

console.log(savingsAccount);
console.log(JSON.stringify(savingsAccount));

currentAccount.deposit(100);
currentAccount.deductFee();
console.log(currentAccount.toString());

console.log("---");

const bank = new Bank();
bank.addAccount(new CurrentAccount());
bank.addAccount(new SavingsAccount());
console.log(bank.toString());
console.log(bank.toJSON());
