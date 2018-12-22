import isEven from "./isEven";

it("pass for parameter '22", () => {
  const actual = isEven(22);
  expect(actual).toBe(true);
});

it("pass for parameter '21", () => {
  const actual = isEven(21);
  expect(actual).toBe(false);
});
