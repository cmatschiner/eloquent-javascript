import dominantDirection from "./dominantDirection";

it("should return 'ltr' for string 'abcdef'", () => {
  const actual = dominantDirection("abcdef");
  expect(actual).toEqual("ltr");
});

it("should return 'ltr' for string ' مساء الخي'", () => {
  const actual = dominantDirection(" مساء الخي");
  expect(actual).toEqual("rtl");
});
