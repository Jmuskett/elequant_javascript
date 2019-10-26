import { reverseArray, reverseArrayInPlace } from "./reverseArray"
// reverseArray,
//takes an array as argument and
//produces a new array that has the same
//elements in the inverse order.

test("the function is defined", () => {
  expect(reverseArray).toBeDefined()
})

test("the function takes an array and returns the reversed array", () => {
  const expected = [5, 4, 3, 2, 1]

  expect(reverseArray([1, 2, 3, 4, 5])).toEqual(expected)
})

// The second, reverseArrayInPlace,
//does what the reverse method does:
//it modifies the array given as argument
//by reversing its elements.

test("the function is defined", () => {
  expect(reverseArrayInPlace).toBeDefined()
})

test("reverseArrayInPlace swaps the values of the array", () => {
  const expected = [5, 4, 3, 2, 1]
  expect(reverseArrayInPlace([1, 2, 3, 4, 5])).toEqual(expected)
})
