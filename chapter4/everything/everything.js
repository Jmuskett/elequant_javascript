export const every = (arr, condition) => {
  let result = true;

  const innerFunc = (arr, counter) => {
    if (counter < arr.length) {
      condition(arr[counter]) ? innerFunc(arr, counter + 1) : (result = false);
    } else {
      return;
    }
  };

  innerFunc(arr, 0);
  return result;
};
