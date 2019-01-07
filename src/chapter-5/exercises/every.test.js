import every from "./every";
import everySome from "./every";

it("version 1: should return true for array [1, 3, 5] and callback n => n < 10)", () => {
  const actual = every([1, 3, 5], n => n < 10);
  expect(actual).toBe(true);
});

it("version 2: should return true for array [1, 3, 5] and callback n => n < 10)", () => {
  const actual = everySome([1, 3, 5], n => n < 10);
  expect(actual).toBe(true);
});

it("version 1: should return true for array [] and callback n => n < 10)", () => {
  const actual = every([], n => n < 10);
  expect(actual).toBe(true);
});

it("version 2: should return true for array [] and callback n => n < 10)", () => {
  const actual = everySome([], n => n < 10);
  expect(actual).toBe(true);
});
