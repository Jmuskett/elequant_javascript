class SumNumbers {
  constructor() {
    this.numArr = []
  }

  range(x, y, s) {
    x <= y
      ? (this.numArr.push(x), (x = x + s || x + 1), this.range(x, y, s))
      : null

    return this.numArr
  }

  sum(arr) {
    let position = 0
    let counter = 0

    const incrementCounterAndPosition = () => {
      ;(counter += arr[position]), position++, addToCounter()
    }

    const addToCounter = () => {
      position < arr.length ? incrementCounterAndPosition() : null
    }

    addToCounter()

    return counter
  }
}

export default SumNumbers
