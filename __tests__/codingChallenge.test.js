const findMagicIndex = require("../MagicIndex/magicIndex");

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
    
  });
});
