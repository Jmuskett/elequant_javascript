export const range = (x, y, r) => {
  const numbers = []

  const inner = (x, y) => {
    x <= y ? (numbers.push(x), inner(x + r || x + 1, y)) : null
  }

  const innerReverse = (x, y) => {
    x >= y ? (numbers.push(x), innerReverse(x + r || x - 1, y)) : null
  }

  x < y ? inner(x, y) : innerReverse(x, y)

  return numbers
}

export const sum = numArr => {
  let position = 0
  let total = 0

  const inner = array => {
    position < numArr.length
      ? ((total += array[position]), (position = position + 1), inner(array))
      : null
  }

  inner(numArr)

  return total
}
