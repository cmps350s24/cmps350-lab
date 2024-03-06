import * as Bank from "./bank.js";
// import { get } from "./bank.js";

// console.log(Bank.accounts);

Bank.getAll()[0].id = "";
console.log(Bank.getAll());

console.log(Bank.get("08a45dd42"));

console.log(Bank.toJSON());
console.log(Bank.fromJSON(Bank.toJSON()));
