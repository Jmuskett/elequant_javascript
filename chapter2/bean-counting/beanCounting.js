export const countBs = string => {
  let position = string.length - 1
  let wordCount = 0

  for (position; position > -1; position--) {
    if (string[position] === "B") {
      wordCount++
    }
  }

  return wordCount
}

export const countChars = (string, char) => {
  let count = 0

  for (let i = string.length; i > -1; i--) {
    if (string[i] === char) {
      count++
    }
  }
  return count
}
