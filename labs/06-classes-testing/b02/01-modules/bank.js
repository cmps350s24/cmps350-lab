import { nanoid } from "nanoid";
import _ from "lodash";

const accounts = [
  { id: "08a45dd424", balance: 502.3, type: "savings" },
  { id: "a9e2465841", balance: 4100.0, type: "current" },
  { id: "7160dca601", balance: 34420.55, type: "current" },
  { id: "2efde49d9d", balance: 61023.69, type: "savings" },
];

export function accountsCopy() {
  return _.cloneDeep(accounts);
  // return Array.from(accounts);
  // return [...accounts];
}

function generateId() {
  return nanoid(10);
}

export function add(account) {
  accounts.push({
    ...account,
    id: generateId(),
  });

  // accounts = [
  //   ...accounts,
  //   {
  //     ...account,
  //     id: generateId(),
  //   },
  // ];
}

export function getAccount(id) {
  return accounts.find((a) => a.id === id);
}

export function removeAccount(id) {
  const index = accounts.findIndex((a) => a.id === id);
  if (index !== -1) {
    accounts.splice(index, 1);
  }

  // accounts = accounts.filter((a) => a.id !== id);
}

export function deposit(id, amount) {
  if (amount < 0) {
    return;
  }

  const account = getAccount(id);
  if (account) {
    account.balance += amount;
  }
}

export function withdraw(id, amount) {
  if (amount < 0) {
    return;
  }

  const account = getAccount(id);
  if (account) {
    if (account.balance >= amount) {
      account.balance -= amount;
    } else {
      throw new Error("Insufficient balance!");
    }
  }
}

export function totalBalance() {
  return accounts.reduce((a, v) => a + v.balance, 0);
}

export function deductFee(fee) {
  accounts
    .filter((a) => a.type === "current")
    .forEach((a) => {
      if (a.balance >= fee) {
        a.balance -= fee;
      } else {
        throw new Error("Insufficient balance!");
      }
    });
}

export function distributeBenefit(percentage) {
  accounts
    .filter((a) => a.type === "savings")
    .forEach((a) => {
      a.balance *= 1 + percentage;
    });
}

export function toJSON() {
  return JSON.stringify(accounts);
}

export function fromJSON(json) {
  return JSON.parse(json);
}

// export { _ as lodash };
// export { addAccount, getAccount as get };
// export default accounts;
