/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * @info 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。
    如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
    必须原地修改，只允许使用额外常数空间。
* 
 */
var nextPermutation = function(nums) {
    let firstIndex = -1
    let secondIndex = -1
    for(let i =0;i<nums.length-1;i++){
        if(i === nums.length-1){
            nums.sort()
            return
        }
        if(nums[i] < nums[i+1]){
            firstIndex = i
        }
    }
    for(let i =firstIndex+1;i<nums.length;i++){
        if(nums[i] > nums[firstIndex]){
            secondIndex = i
        }
    }
    [nums[firstIndex],nums[secondIndex]] = [nums[secondIndex],nums[firstIndex]]
    function reverse(nums,startIndex,endIndex){
            while(startIndex<endIndex){
                [nums[startIndex],nums[endIndex]] = [nums[endIndex],nums[startIndex]]
                ++startIndex
                --endIndex
            }
    }
    reverse(nums,firstIndex+1,nums.length-1)
};

nextPermutation([1,2,7,4,3,1])