import { arrayFlatten } from "./arrayFlatten"

//reduce and concact

test("the function flattens the arguments into one array", () => {
  const arrays = [[1, 2, 3], [4, 5], [6]]
  const expected = [1, 2, 3, 4, 5, 6]

  expect(arrayFlatten(arrays)).toEqual(expected)
})
