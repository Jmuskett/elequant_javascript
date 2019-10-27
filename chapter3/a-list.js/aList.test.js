import { arrayToList } from "./aList"

//Write a function arrayToList that builds up
//a list structure like the one
//shown when given[1, 2, 3] as argument

test("array to list is defined", () => {
  expect(arrayToList).toBeDefined()
})

test("When given an array, the function returns a nested object", () => {
  const expected = {
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null
      }
    }
  }
  expect(arrayToList([1, 2, 3])).toEqual(expected)
})
