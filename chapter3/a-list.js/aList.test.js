import { arrayToList, listToArray, prepend, nth } from "./aList"

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

test("list to array is defined", () => {
  expect(listToArray).toBeDefined()
})

test("when given a list, the function returns an array of its values", () => {
  const expected = [1, 2, 3]
  const list = {
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null
      }
    }
  }
  expect(listToArray(list)).toEqual(expected)
})

test("prepend is defined", () => {
  expect(prepend).toBeDefined()
})

test("prepend takes an element and a list and creates a new list that adds the element to the front of the input list", () => {
  const element = 5
  const existingList = {
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null
      }
    }
  }

  const newList = {
    value: 5,
    rest: {
      value: 1,
      rest: {
        value: 2,
        rest: {
          value: 3,
          rest: null
        }
      }
    }
  }

  expect(prepend(element, existingList)).toEqual(newList)
})

test("nth is defined", () => {
  expect(nth).toBeDefined()
})

test("nth takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.", () => {
  const list = {
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null
      }
    }
  }

  expect(nth(0, list)).toEqual(1)
  expect(nth(2, list)).toEqual(3)
  expect(nth(5, list)).toEqual(undefined)
})
