/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let lastIndex = nums.length-1;
    for(let i=lastIndex;i>=0;--i){
            if(nums[i]+i>=lastIndex){
                lastIndex = i;
            }
    }
    return lastIndex == 0 ;
};
console.log("canJump([2,3,1,1,4]):", canJump([2,3,1,1,4]));
canJump([2,3,1,1,4])
console.log("canJump([3,2,1,0,4]):", canJump([3,2,1,0,4]));
canJump([3,2,1,0,4])