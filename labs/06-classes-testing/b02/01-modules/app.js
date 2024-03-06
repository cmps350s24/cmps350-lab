// import { add as addAccount } from "./bank.js";
import * as bank from "./bank.js";

bank.add({
  balance: 0.0,
  type: "current",
});

// addAccount({
//   balance: 0.0,
//   type: "current",
// });

// console.log(bank.accountsCopy());
// const accounts = bank.accountsCopy();
// accounts[0].id = "";
// console.log(bank.accountsCopy());

console.log(bank.getAccount("08a45dd424"));
console.log(bank.getAccount("123"));

bank.deposit("08a45dd424", -100);
bank.deposit("123", 100);
bank.deposit("08a45dd424", 1000);

try {
  bank.withdraw("08a45dd424", 1000000);
} catch (e) {
  console.error(e);
}

console.log(bank.accountsCopy());

const jsonString = bank.toJSON();
const accounts = bank.fromJSON(jsonString);

console.log(jsonString);
console.log(accounts);

// if (!bank.getAccount("123")) {
//   console.log("not found");
// } else {
//   console.log("found");
// }
