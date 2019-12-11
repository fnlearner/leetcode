/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * 滑动窗口问题
 */
var containsNearbyDuplicate = function(nums, k) {
    const set = new Set();
    for(let i = 0; i < nums.length; i++) {
        if(set.has(nums[i])) {
            return true;
        }
        set.add(nums[i]);
        if(set.size > k) {
            set.delete(nums[i - k]);
        }
    }
    return false;
};

// console.log(containsNearbyDuplicate([1,2,3,1,2,3],2));