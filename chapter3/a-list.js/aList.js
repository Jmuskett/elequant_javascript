export const arrayToList = arr => {
  let list = null
  let startPosition = arr.length - 1

  const inner = counter => {
    counter >= 0
      ? ((list = { value: arr[counter], rest: list }), inner(counter - 1))
      : null
  }

  inner(startPosition)

  return list
}

export const listToArray = list => {
  let arr = []

  const inner = list => {
    list.rest === null
      ? arr.push(list.value)
      : (arr.push(list.value), inner(list.rest))
  }

  inner(list)

  return arr
}

export const prepend = (el, list) => {
  let newList = {}

  newList.value = el
  newList.rest = list

  return newList
}

export const nth = (index, list) => {
  let counter = index
  let val = undefined

  const inner = (counter, list) => {
    if (!list) {
      val = undefined
      return
    }

    counter === 0 ? (val = list.value) : inner(counter - 1, list.rest)
  }

  inner(counter, list)
  return val
}
