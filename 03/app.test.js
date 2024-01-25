import randomNumber from "./app";

test("Equal One", () => {
  expect(randomNumber(1, 1)).toBe(1);
});

test("should return a value in the range from min to max", () => {
  const min = 1;
  const max = 10;
  const value = randomNumber(min, max);
  expect(value).toBeGreaterThanOrEqual(min);
  expect(value).toBeLessThan(max);
});

test("should throw an error if min is greater than max", () => {
  expect(() => randomNumber(4, 3)).toThrow(RangeError);
});
