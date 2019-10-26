export const reverseArray = arr => {
  const newArr = []

  const inner = counter => {
    counter >= 0 ? (newArr.push(arr[counter]), inner(counter - 1)) : null
  }

  inner(arr.length - 1)

  return newArr
}

export const reverseArrayInPlace = arr => {
  let temp = 0

  const inner = counter => {
    const endPossition = arr.length - (1 + counter)
    counter <= arr.length / 2
      ? ((temp = arr[counter]),
        (arr[counter] = arr[endPossition]),
        (arr[endPossition] = temp),
        inner(counter + 1))
      : null
  }

  inner(0)

  return arr
}
