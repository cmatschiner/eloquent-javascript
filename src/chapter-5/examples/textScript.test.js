import textScript from "./textScript";

it("should return '61 % Han, 22 % Latin, 17 % Cyrillic​​​​​' for '英国的狗说woof俄罗斯的狗说тяв", () => {
  const actual = textScript("英国的狗说woof俄罗斯的狗说тя");
  const result = "65% Han, 24% Latin, 12% Cyrillic";
  expect(actual).toEqual(result);
});
