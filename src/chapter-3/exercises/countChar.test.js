import countChar from "./countChar";

it("should return '1' for the parameter 'a' in the string 'abcdefghij'", () => {
  const actual = countChar("abcdefghij", "a");
  expect(actual).toEqual(1);
});

it("should return '0' for the parameter 'A' in the string 'abcdefghij'", () => {
  const actual = countChar("abcdefghij", "A");
  expect(actual).toEqual(0);
});
