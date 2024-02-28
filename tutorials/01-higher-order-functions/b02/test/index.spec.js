import { expect } from "chai";
import { max, range, rand } from "../index.js";

describe("tutorial", () => {
  describe("max function", () => {
    it("max([1, 3, 2]) should return 3", () => {
      expect(max(1, 3, 2)).to.equal(3);
    });

    it("max() should return -Infinity", () => {
      expect(max()).to.equal(-Infinity);
    });
  });

  describe("range function", () => {
    it("range(1, 5) should return [1, 2, 3, 4, 5]", () => {
      expect(range(1, 5)).to.deep.equal([1, 2, 3, 4, 5]);
    });

    it("range(1, 1) should return [1]", () => {
      expect(range(1, 1)).to.deep.equal([1]);
    });

    it("range(-5, -3) should return [-5, -4, -3]", () => {
      expect(range(-5, -3)).to.deep.equal([-5, -4, -3]);
    });

    it("range(5, 1) should return []", () => {
      expect(range(5, 1)).to.deep.equal([]);
    });
  });

  describe("rand function", () => {
    it("1 <= rand(1, 4) < 4", () => {
      const nums = Array.from({ length: 100000 }).map(() => rand(1, 4));
      expect(nums.filter((n) => n < 1)).to.be.empty;
      expect(nums.filter((n) => n >= 4)).to.be.empty;
    });
  });
});
