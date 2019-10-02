// Write a function min that takes two arguments and returns their minimum.
import { min } from "./minimum"

test("it returns the minimum number", () => {
  const resultA = min(0, 10)
  const resultB = min(0, -10)

  expect(resultA).toEqual(0)
  expect(resultB).toEqual(-10)
})
