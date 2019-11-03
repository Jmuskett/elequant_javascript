export const arrayFlatten = args => {
  return [...args].reduce((acc, cv) => acc.concat(cv))
}
