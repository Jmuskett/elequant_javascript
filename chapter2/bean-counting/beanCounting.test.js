//Write a function countBs that takes a string as its only argument
//and returns a number that indicates how many uppercase “B” characters there are in the string.
import { countBs, countChars } from "./beanCounting"

test("it counts how many uppercase B letters there are in the string", () => {
  const expected = 3

  expect(countBs("aBcdBefgB")).toEqual(expected)
})

//Next, write a function called countChar that behaves like
//countBs, except it takes a second argument
//that indicates the character that
//is to be counted(rather than counting only uppercase “B” characters).
//Rewrite countBs to make use of this new function.

test("It takes a generic character and counts the instances", () => {
  const expected = 2

  expect(countChars("animal", "a")).toBe(expected)
})
