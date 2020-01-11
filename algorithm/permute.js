/**
 * @param {number[]} nums
 * @return {number[][]} Array
 * @info 给定一个没有重复数字的序列，返回其所有可能的全排列
 */
var permute = function(nums) {
  let result = [];
  if (nums.length === 1) return [nums];
  for (let i = 0; i < nums.length&&nums.length!==1; i++) {
    const start = nums.slice(i, i + 1);
    const left = [...nums.slice(0, i), ...nums.slice(i + 1)];
    for (let item of permute(left)) {
      result.push(start.concat(item));
    }
  }
//   console.log(result)
  return result;
};

//[1,2,3]
permute([1,2,3]);
