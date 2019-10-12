export const reverseArray = arr => {
  let reversedArr = []

  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i])
  }

  return reversedArr
}

export const reverseArrayInPlace = arr => {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp = arr[i]
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = temp
  }

  return arr
}
