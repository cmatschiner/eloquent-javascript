import average from "./average";
import SCRIPTS from "./scripts";

it("should return 1188 for no. of living languages in data set SCRIPTS ", () => {
  const actual = Math.round(
    average(SCRIPTS.filter(s => s.living).map(s => s.year))
  );
  expect(actual).toEqual(1188);
});

it("should return 188 for no. of non-living languages in data set SCRIPTS ", () => {
  const actual = Math.round(
    average(SCRIPTS.filter(s => !s.living).map(s => s.year))
  );
  expect(actual).toEqual(188);
});
