export const loop = (val, test, update, body) => {
  const innerLoop = val => {
    test(val) !== false ? (body(val), innerLoop(update(val))) : null
  }

  innerLoop(val)
}
