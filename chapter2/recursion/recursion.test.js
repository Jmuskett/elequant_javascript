// zero is even
// one is odd
// for any other number, it's evenness is the same as N - 2
// define a recursive function, isEven
// the function should take a single parameter and return a boolean
// 50 is even
// 75 is odd
// -1 is ???
import { isEven } from "./recursion"

test("it returns true if the number is 50", () => {
  const result = isEven(50)
  expect(result).toBe(true)
})

test("it returns false if the number is 75", () => {
  const result = isEven(75)

  expect(result).toBe(false)
})
