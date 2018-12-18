import deepEqual from "./deepEqual";

it("should compare numbers correctly", () => {
  expect(deepEqual(1, 1)).toEqual(true);
});
it("should fail on different numbers", () => {
  expect(deepEqual(1, 2)).toEqual(false);
});
