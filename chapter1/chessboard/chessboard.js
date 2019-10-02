export const chessboard = size => {
  let string = " "
  const dimensions = size * size
  const newRow = size + 1

  for (let counter = 1; counter < dimensions; counter++) {
    let char
    counter % newRow === 0
      ? (char = "\n")
      : counter % 2 !== 0
      ? (char = " ")
      : (char = "#")
    string += char
  }

  return string
}
