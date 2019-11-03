export const loop = (val, test, update, body) => {
  const innerLoop = val => {
    if (test(val) === false) {
      return
    } else {
      body(val)
      innerLoop(update(val))
    }
  }

  innerLoop(val)
}
