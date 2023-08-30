const nestedObject = require("./NestedObject");

test("Test 1", () => {
  expect(
    nestedObject({
      outer: 2,
      obj: {
        inner: 2,
        otherObj: {
          superInner: 2,
          notANumber: true,
          alsoNotANumber: "yup",
        },
      },
    })
  ).toEqual(6);
});

test("Test 2", () => {
  expect(
    nestedObject({
      a: 2,
      b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
      c: { c: { c: 2 }, cc: "ball", ccc: 5 },
      d: 1,
      e: { e: { e: 4 }, ee: "car" },
    })
  ).toEqual(12);
});
