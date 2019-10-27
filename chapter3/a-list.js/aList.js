export const arrayToList = arr => {
  let list = null
  let counter = arr.length - 1

  const inner = counter => {
    counter >= 0
      ? ((list = { value: arr[counter], rest: list }), inner(counter - 1))
      : null
  }

  inner(counter)

  return list
}
