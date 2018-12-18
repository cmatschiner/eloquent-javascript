import deepEqual from "./deepEqual";

it("should compare numbers correctly", () => {
  const actual = deepEqual(1, 1);
  expect(actual).toBeTruthy();
});

it("should fail on different numbers", () => {
  const actual = deepEqual(1, 2);
  expect(actual).toBeFalsy();
});

it("should pass on equal objects", () => {
  const actual = deepEqual(
    { a: 2, b: { x: 1, c: null } },
    { a: 2, b: { x: 1, c: null } }
  );
  expect(actual).toBeTruthy();
});

it("should fail on objects with an additional property", () => {
  const actual = deepEqual(
    { a: 2, b: { x: 1 } },
    { a: 2, b: { x: 1, c: null } }
  );
  expect(actual).toBeFalsy();
});

it("should pass with both undefined properties", () => {
  const actual = deepEqual(
    { a: 2, b: { x: 1, c: undefined } },
    { a: 2, b: { x: 1, c: undefined } }
  );
  expect(actual).toBeTruthy();
});

it("should pass with an undefined property on the first object", () => {
  const actual = deepEqual(
    { a: 2, b: { x: 1, c: undefined } },
    { a: 2, b: { x: 1 } }
  );
  expect(actual).toBeTruthy();
});

it("should pass with an undefined property on the second object", () => {
  const actual = deepEqual(
    { a: 2, b: { x: 1 } },
    { a: 2, b: { x: 1, c: undefined } }
  );
  expect(actual).toBeTruthy();
});

it("should fail when comparing null and undefined properties", () => {
  const actual = deepEqual(
    { a: 2, b: { x: 1, c: null } },
    { a: 2, b: { x: 1, c: undefined } }
  );
  expect(actual).toBeFalsy();
});

it("should fail with a nested undefined property", () => {
  const actual = deepEqual(
    { a: 2, b: { x: 1, c: { d: undefined } } },
    { a: 2, b: { x: 1 } }
  );
  expect(actual).toBeFalsy();
});

it("should fail on mixed strings and objects", () => {
  const actual = deepEqual(1, { a: 2, b: { x: 1, c: undefined } });
  expect(actual).toBeFalsy();
});

it("should fail on mixed null and object", () => {
  const actual = deepEqual(null, { a: 2, b: { x: 1, c: undefined } });
  expect(actual).toBeFalsy();
});

it("should fail on mixed object and null", () => {
  const actual = deepEqual({ a: 2, b: { x: 1, c: undefined } }, null);
  expect(actual).toBeFalsy();
});
