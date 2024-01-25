import randomNumber from "./app";

test("Equal One", () => {
  expect(randomNumber(1, 1)).toBe(1);
});

// describe('Equale One', () =>{
//     it('should input 1', () =>{
//         expect(randomNumber(1,1)).toBe(1)
//     })
// })

test("should return a value in the range from min to max", () => {
  const min = 1;
  const max = 10;
  const value = randomNumber(min, max);
  expect(value).toBeGreaterThanOrEqual(min);
  expect(value).toBeLessThan(max);
});

