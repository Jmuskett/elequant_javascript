import { reverseArray, reverseArrayInPlace } from "./reverseArray"

//For this exercise, write two functions, reverseArray and reverseArrayInPlace.
//The first, reverseArray, takes an array as argument and produces a new array
//that has the same elements in the inverse order.The second, reverseArrayInPlace,
//does what the reverse method does: it modifies the array given as argument by reversing
//its elements.Neither may use the standard reverse method.

describe("reverse array methods", () => {
  test("reverse array takes an array as an argument and createss a new array that has the same elements inverted", () => {
    expect(reverseArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1])
  })

  test("the reverse array in place function returns a mutated array", () => {
    expect(reverseArrayInPlace([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1])
  })
})
