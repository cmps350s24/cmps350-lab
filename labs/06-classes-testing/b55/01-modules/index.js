import * as bank from "./bank.js";
// import { add as addAccount } from "./bank.js";

// console.log(bank.accounts);

console.log(bank.add({ balance: 100, type: "savings" }));
console.log(bank.getAll());

let accounts = bank.getAll();
accounts[0] = {};
accounts[0].id = "";
console.log(accounts);
console.log(bank.getAll());

const a = bank.get("08a45dd424");
console.log(a);
if (a) {
  a.id = "";
}
console.log(a);
console.log(bank.getAll());

console.log(bank.toJSON());
console.log(bank.fromJSON(bank.toJSON()));
