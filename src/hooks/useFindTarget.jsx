export const useFindTarget = (targetArray, keys, value) => {
  const TARGET = targetArray.find((item) => item?.[keys] == value);

  return TARGET;
};
