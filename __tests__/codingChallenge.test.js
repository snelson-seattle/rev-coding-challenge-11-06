const findMagicIndex = require("../MagicIndex/magicIndex");
const powerSet = require("../PowerSet/powerSet");
const recursiveMultiply = require("../RecursiveMultiply/recursiveMultiply");

describe("Coding Challenge Tests", () => {
  describe("Magic Index", () => {
    test("Should return the Magic Index if it exists", () => {
      const integers = [-1, 1, 2, 3, 4, 5];

      const result = findMagicIndex(integers);

      expect(result).toBe(1);
    });

    test("Should return -1 if no Magic Index exists", () => {
      const integers = [1, 2, 3, 4, 5];

      const result = findMagicIndex(integers);

      expect(result).toBe(-1);
    });
  });

  describe("Power Set", () => {
    test("Should return the Power Set of a given Set", () => {
      const set = [1, 2];
      const result = powerSet(set);
      expect(result.length).toBe(4);
      expect(result).toStrictEqual([[], [1], [2], [1, 2]]);
    });
  });

  describe("Recursive Multiply", () => {
    test("Should correctly multiply two positive integers", () => {
        const a = 5;
        const b = 6;
        const result = recursiveMultiply(a, b);
        expect(result).toBe(30);
    });

    test("Should result in -1 if given a negative integer as an argument", () => {
        const a = 1;
        const b = -5;
        const result = recursiveMultiply(a, b);
        expect(result).toBe(-1);
    });
  });
});
