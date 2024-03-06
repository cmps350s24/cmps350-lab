import { expect } from "chai";
import Bank from "../../02-classes/bank.js";
import CurrentAccount from "../../02-classes/current-account.js";
import SavingsAccount from "../../02-classes/savings-account.js";

const bank = new Bank();

describe("Bank Class", () => {
  describe("Adding an account", () => {
    it("Add an account and returns it when getting", () => {
      const account = new CurrentAccount();
      bank.addAccount(account);
      expect(bank.getAccount(account.id)).to.not.be.undefined;
      expect(bank.getAccount(account.id)).to.not.be.null;
      expect(bank.getAccount(account.id)).to.have.property("id");
      expect(bank.getAccount(account.id)).to.have.property("balance");
      expect(bank.getAccount(account.id).id).equal(account.id);
    });
  });
});
