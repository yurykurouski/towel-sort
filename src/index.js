module.exports = function towelSort(matrix) {
  if (!matrix) return [];

  const result = [];

  let index = 0;

  matrix.forEach(el => {
    if (index === 0) {
      result.push(el);
      index++
    } else {
      result.push(el.reverse());
      index--;
    }
  });

  return result.flat();
}
