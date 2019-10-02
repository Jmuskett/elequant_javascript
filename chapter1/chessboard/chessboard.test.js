import { chessboard } from "./chessboard"
// write a program that creates an 8 x 8 grid, using new line characters to seperate the lines
// at each position there is either a blank space or a '#'
// passing the string to console.log will create the board
// once you have done this, define a binding for size = 8 and refactor so it works with any size
const str = chessboard(8)
const tenByTen = chessboard(10)

test("it should be 64 characters long", () => {
  expect(str.length).toBe(64)
})

test("if the character is an odd number it should return a blank space", () => {
  expect(str.charAt(1)).toBe(" ")
})

test("if the character is an even number, it should return a # symbol", () => {
  expect(str.charAt(2)).toBe("#")
})

test("after every 8th character, start a new line", () => {
  expect(str.charAt(9)).toBe("\n")
})

test("it accepts paramtised sizes", () => {
  expect(tenByTen.length).toBe(100)
})
