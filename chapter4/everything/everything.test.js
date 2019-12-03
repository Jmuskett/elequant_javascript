import { every } from "./everything";
//returns true when the given function returns true for every element in the array.
//In a way, some is a version of the || operator that acts on arrays,
//and every is like the && operator.
//Implement every as a function that takes an array and a predicate function as
// parameters. Write two versions, one using a loop and one using the some method.

test("it returns true if every element in the array meets the condition", () => {
  expect(every([1, 3, 5], n => n < 10)).toBe(true);
  expect(every([2, 4, 16], n => n < 10)).toEqual(false);
  expect(every([], n => n < 10)).toEqual(true);
});
