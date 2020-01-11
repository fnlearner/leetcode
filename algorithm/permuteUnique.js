/**
 * @param {number[]} nums
 * @return {number[][]}
 * @info 给定一个可包含重复数字的序列，返回所有不重复的全排列。
 */
var permuteUnique = function(nums) {
  let result = [];
  nums.sort()
  if (nums.length === 1) return [nums];
  for (let i = 0; i < nums.length && nums.length !== 1; i++) {
    const start = nums.slice(i, i + 1);
    const left = [...nums.slice(0, i), ...nums.slice(i + 1)];
    for (let item of permuteUnique(left)) {
        const pushItem = start.concat(item)

        result.push(pushItem);
    }
    result.sort()
   for(let i=0;i<result.length-1;i++){
       const current =result[i].join('')
       const after = result[i+1].join('')
       if(current === after){
           result.splice(i+1,1)
           i--
           continue
       }
   }
  }
//   console.log(result)
  return result;
};
permuteUnique([1, 1, 2]);
