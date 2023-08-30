const maxSum = require("./MaxSum");

test("Test 1", () => {
  expect(maxSum([100, 200, 300, 400], 2)).toEqual(700);
});

test("Test 2", () => {
  expect(maxSum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toEqual(39);
});

test("Test 3", () => {
  expect(maxSum([-3, 4, 0, -2, 6, -1], 2)).toEqual(5);
});
