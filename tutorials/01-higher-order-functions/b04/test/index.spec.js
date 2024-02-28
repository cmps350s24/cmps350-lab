import { expect } from "chai";
import { max, range, rand, factorial } from "../index.js";
import { describe, it } from "mocha";

describe("higher-order functions tutorial", () => {
  describe("max function", () => {
    it("max(1, 2, 3) is 3", () => {
      // assert.equal(max(1, 2, 3), 3);
      expect(max(1, 2, 3)).to.equal(3);
    });

    it("max(1) is 1", () => {
      // assert.equal(max(1), 1);
      expect(max(1)).to.equal(1);
    });

    it("max() is -Infinity", () => {
      // assert.equal(max(), -Infinity);
      expect(max()).to.equal(-Infinity);
    });
  });

  describe("range function", () => {
    it("range(1, 3) is [1, 2, 3]", () => {
      expect(range(1, 3)).to.deep.equal([1, 2, 3]);
    });
  });

  describe("rand function", () => {
    it("2 <= rand(2, 5) < 5", () => {
      const r = rand(2, 5);
      expect(r).to.greaterThanOrEqual(2);
      expect(r).to.lessThan(5);
    });
  });

  describe("factorial function", () => {
    it("factorial(0) is 1", () => {
      expect(factorial(0)).to.equal(1);
    });
  });
});
