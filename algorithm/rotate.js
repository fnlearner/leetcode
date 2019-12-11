/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const len = nums.length;
    const beyond = nums.slice(-k%len);
    const front = nums.slice(0,-k%len);
    // console.log(`beyond : ${beyond}`)
    // console.log(`front : ${front}`)
    nums= [...beyond,...front];
    // console.log(nums);
};
rotate( [-1,-100,3,99]  ,
2)
rotate(  [1,2,3,4,5,6,7,8]   ,
    3)