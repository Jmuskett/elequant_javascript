export const isEven = num => {
  const even = 0
  const odd = 1

  if (num === even) {
    return true
  } else if (num === odd) {
    return false
  } else {
    return isEven(num - 2)
  }
}
