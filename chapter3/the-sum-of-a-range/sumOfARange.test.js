import { range, sum } from "./sumOfARange"

//Write a range function that takes two arguments,
//start and end, and returns an array containing all the numbers
//from start up to(and including) end

test("it returns all the numbers from x - y", () => {
  const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const result = range(1, 10)
  expect(result).toEqual(expectedResult)
})

//Next, write a sum function that takes an array of numbers and
//returns the sum of these numbers.
//Run the example program and see whether it does
//indeed return 55.

test("it returns 55", () => {
  expect(sum(range(1, 10))).toEqual(55)
})

//As a bonus assignment, modify your range function to
//take an optional third argument that indicates the “step”
//value used when building the array.If no step is given,
//the elements go up by increments of one, corresponding to
//the old behavior.

test("a call to range of (1, 10, 2) should return , [1,3,5,7,9]", () => {
  const expected = [1, 3, 5, 7, 9]

  expect(range(1, 10, 2)).toEqual(expected)
})

test("it also works on negative numbers, so that range(5, 2, -1) produces [5, 4, 3, 2]", () => {
  const expected = [5, 4, 3, 2]

  expect(range(5, 2, -1)).toEqual(expected)
})
