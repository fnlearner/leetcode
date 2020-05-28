/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let lastIndex = nums.length-1;
    for(let i=lastIndex;i>=0;--i){
        //逆向反推能到达数组最后一个元素的最远元素在哪里
            if(nums[i]+i>=lastIndex){
                lastIndex = i;
            }
    }
    //如果等于0说明能从数组开头跳到数组结尾
    return lastIndex == 0 ;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 * 
 */
var canJump = function(nums) {
    let right = 0//index 
    for(let i =0;i<nums.length;++i){
            //当当前访问的下标小于能访问的最大值的时候，那么直接返回false 
            if(i > right) return false
            right = Math.max(right,nums[i]+i)//然后把上一次的最大访问下标和 当前下标加上当前能访问的最大值取最大值，更新最大能访问的下标      
    }
    return true
};
console.log("canJump([2,3,1,1,4]):", canJump([2,3,1,1,4]));
canJump([2,3,1,1,4])
console.log("canJump([3,2,1,0,4]):", canJump([3,2,1,0,4]));
canJump([3,2,1,0,4])