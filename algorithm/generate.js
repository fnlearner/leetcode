/**
 * @param {number} numRows
 * @return {number[][]}
 * 杨辉三角
 */
var generate = function(numRows) {
  let rows = [[1], [1, 1]];
  for (let i = 2; i < numRows; i++) {
    rows[i] = Array.from({ length: i }, () => 1);
    for (let j = 0; j < i + 1; j++) {
      const right = j < i ? rows[i - 1][j] : 0;
      const left = j - 1 < 0 ? 0 : rows[i - 1][j - 1];
      //   console.log(i, j, left + right);
      rows[i][j] = left + right;
    }
  }
  if (numRows === 0) return [];
  else if (numRows === 1) return [[1]];
  return rows;
};
generate(5);
