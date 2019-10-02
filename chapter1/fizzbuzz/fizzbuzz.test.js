import { fizzbuzz } from "./fizzbuzz"
// print all numbers 1 - 100
// if number is divisible by 3, log 'fizz'
// if number is divizible by 5, log 'buzz'
// if number divisible by 3 + 5, log 'fizzbuzz

console.log = jest.fn()
fizzbuzz()

test("it console logs 100 times", () => {
  expect(console.log).toHaveBeenCalledTimes(100)
})

test("if the number is divisble by 3, it logs fizz", () => {
  expect(console.log).toHaveBeenNthCalledWith(3, "fizz")
})

test("if the number is divisble by 5, log buzz", () => {
  expect(console.log).toHaveBeenNthCalledWith(5, "buzz")
})

test("if the number is divisble by 3 and 5, log buzz", () => {
  expect(console.log).toHaveBeenNthCalledWith(15, "fizzbuzz")
})
