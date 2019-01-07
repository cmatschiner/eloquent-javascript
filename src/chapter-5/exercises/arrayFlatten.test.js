import arrayFlattenV1 from "./arrayFlatten";
import arrayFlattenV2 from "./arrayFlatten";

it("should return [1, 2, 3, 4, 5, 6] for version 1", () => {
  const actual = arrayFlattenV1([[1, 2, 3], [4, 5], [6]]);
  const result = [1, 2, 3, 4, 5, 6];
  expect(actual).toEqual(result);
});

it("should return [1, 2, 3, 4, 5, 6] for version 2", () => {
  const actual = arrayFlattenV2([[1, 2, 3], [4, 5], [6]]);
  const result = [1, 2, 3, 4, 5, 6];
  expect(actual).toEqual(result);
});
