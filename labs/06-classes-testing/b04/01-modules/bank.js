import _ from "lodash";
import { nanoid } from "nanoid";

const accounts = [
  { id: "08a45dd424", balance: 502.3, type: "savings" },
  { id: "a9e2465841", balance: 4100.0, type: "current" },
  { id: "7160dca601", balance: 34420.55, type: "current" },
  { id: "2efde49d9d", balance: 61023.69, type: "savings" },
];

export function getAll() {
  // return accounts;
  // return [...accounts];
  // return Array.from(accounts);
  // return accounts.map((a) => ({ ...a }));
  return _.cloneDeep(accounts);
}

export function add(account) {
  const id = generateId();
  accounts.push({
    id,
    balance: account.balance ?? 0.0,
    type: account.type ?? "current",
  });

  // accounts = [
  //   ...accounts,
  //   {
  //     id: generateId(),
  //     balance: account.balance ?? 0.0,
  //     type: account.type ?? "current",
  //   },
  // ];
  return id;
}

export function get(id) {
  const result = find(id);
  if (result) {
    return { ...result };
  }
  // return result ? { ...result } : undefined;
  // return undefined;
  // return accounts.find((a) => a.id === id);
}

export function remove(id) {
  const index = accounts.findIndex((a) => a.id === id);
  if (index !== -1) {
    // try {
    accounts.splice(index, 1);
    // } catch (e) {
    //   console.error(e.message);
    // }
  }
  // accounts = accounts.filter((a) => a.id !== id);
}

export function deposit(id, amount) {
  if (amount <= 0.0) {
    return;
  }

  const account = find(id);
  if (account) {
    account.balance += amount;
  }
}

export function withdraw(id, amount) {
  if (amount <= 0.0) {
    return;
  }

  const account = find(id);
  if (account && account.balance >= amount) {
    account.balance -= amount;
  }
}

export function totalBalance() {
  return accounts.reduce((total, account) => total + account.balance, 0.0);
}

export function deductFee(fee) {
  if (fee <= 0.0) {
    return;
  }

  accounts
    .filter((a) => a.type === "current")
    .forEach((a) => {
      if (a.balance < fee) {
        throw new Error("Insufficient balance.");
      }
      a.balance -= fee;
    });
}

export function distributeBenefit(percentage) {
  if (percentage >= 0.0) {
    return;
  }

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

function find(id) {
  return accounts.find((a) => a.id === id);
}

function generateId() {
  return nanoid(10);
}

// export { accounts };
// export default accounts;
