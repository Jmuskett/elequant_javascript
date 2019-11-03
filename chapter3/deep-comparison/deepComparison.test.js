import { deepEqual } from "./deepComparison"

test("the deep comparison function is defined", () => {
  expect(deepEqual).toBeDefined()
})

test("the function takes two values and returns true only if they are the same value or are objects with the same properties", () => {
  let obj = { here: { is: "an" }, object: 2 }

  expect(deepEqual(obj, obj)).toBe(true)
  expect(deepEqual(obj, { here: 1, object: 2 })).toBe(false)
  expect(deepEqual(obj, { here: { is: "an" }, object: 2 })).toBe(true)
})
