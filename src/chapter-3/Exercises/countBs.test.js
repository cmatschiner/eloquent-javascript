import countBs from "./countBs";

it("should pass with the string 'abcdefgh'", () => {
  const actual = countBs("abcdefgh");
  expect(actual).toBeTruthy();
});

it("should pass with the string 'ABCDEFGH'", () => {
  const actual = countBs("ABCDEFGH");
  expect(actual).toBeTruthy();
});
