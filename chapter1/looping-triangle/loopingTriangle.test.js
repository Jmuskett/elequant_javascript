import { loopingTriangle } from "./loopingTriangle"

test("gives the correct print out for number of triangles", () => {
  console.log = jest.fn()
  loopingTriangle()
  expect(console.log.mock.calls[0][0]).toBe("#")
  expect(console.log).toHaveBeenCalledTimes(7)
  expect(console.log).not.toHaveBeenCalledTimes(8)
})
