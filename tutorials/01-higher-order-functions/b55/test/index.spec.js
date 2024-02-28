// import assert from "assert";
import { expect } from "chai";
import { max, range } from "../index.js";
import { describe, interfaces, it } from "mocha";

describe("tutorial", () => {
  describe("max", () => {
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

  describe("range", () => {
    it("range(1, 3) is [1, 2, 3]", () => {
      expect(range(1, 3)).to.deep.equal([1, 2, 3]);
    });
  });
});
