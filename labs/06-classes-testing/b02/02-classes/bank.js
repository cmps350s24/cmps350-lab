import _ from "lodash";

export default class Bank {
  #accounts;

  constructor(accounts = []) {
    this.#accounts = accounts;
  }

  get accounts() {
    // return this.#accounts;
    return _.cloneDeep(this.#accounts);
  }

  getAccounts() {
    return this.accounts;
  }

  getAccount(id) {
    return this.#accounts.find((a) => a.id === id);
  }

  addAccount(account) {
    this.#accounts.push(account);
  }

  removeAccount(id) {
    const index = this.#accounts.findIndex((a) => a.id === id);
    if (index !== -1) {
      this.#accounts.splice(index, 1);
    }
  }

  totalBalance() {
    return this.#accounts.reduce((a, v) => a + v.balance, 0);
  }

  toString() {
    return this.#accounts.map((a) => a.toString()).join("\n");
  }

  toJSON() {
    return this.#accounts.map((a) => a.toJSON());
  }

  fromJSON(json) {
    const array = JSON.parse(json);
    array.map(
      (o) =>
        o.type === "current" ? new CurrentAccount() : new SavingsAccount(),
      []
    );
  }
}
