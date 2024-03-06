import { nanoid } from "nanoid";

const accounts = [
  { id: "08a45dd424", balance: 502.3, type: "Savings" },
  { id: "a9e2465841", balance: 4100.0, type: "Current" },
  { id: "7160dca601", balance: 34420.55, type: "Current" },
  { id: "2efde49d9d", balance: 61023.69, type: "Savings" },
];

export function getAll() {
  // return accounts;
  return [...accounts];
}

export function add(account) {
  // accounts = [...accounts, { ...account, id: nanoid(10) }];
  // accounts.push({ ...account, id: nanoid(10) });

  const id = nanoid(10);
  accounts.push({
    id,
    balance: account.balance ?? 0.0,
    type: account.type ?? "current",
  });
  return id;
}

function find(id) {
  return accounts.find((account) => account.id === id);
}

export function get(id) {
  const result = find(id);
  if (result) {
    return { ...result };
  }
  // return undefined;
}

export function remove(id) {
  // accounts = accounts.filter(a => a.id !== id);

  // const index = accounts.map(a => a.id).indexOf(id);
  const index = accounts.findIndex((account) => account.id === id);
  if (index !== -1) {
    accounts.splice(index, 1);
  }
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
  return accounts.reduce((total, account) => total + account.balance, 0);
}

export function deductFee(fee) {
  if (fee <= 0.0) {
    return;
  }

  accounts.forEach((account) => {
    if (account.type === "current") {
      // withdraw(account.id, fee);
      account.balance -= fee; // assuming you have enough balance
    }
  });

  // accounts = accounts.map((account) => {
  //   if (account.type === "current") {
  //     // account.balance -= fee;
  //     // return account;
  //     return {
  //       ...account,
  //       balance: account.balance - fee,
  //     };
  //   }
  //   // return account;
  //   return { ...account };
  // });
}

export function distributeBenefit(percentage) {
  if (percentage <= 0.0) {
    return;
  }

  accounts.forEach((account) => {
    if (account.type === "savings") {
      // deposit(account.id, account.balance * percentage);
      account.balance *= 1 + percentage;
    }
  });
}

export function toJSON() {
  return JSON.stringify(accounts);
}

export function fromJSON(json) {
  return JSON.parse(json);
}

// export { add };
// export default accounts;
