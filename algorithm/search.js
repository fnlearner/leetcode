/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * @description 假设按照升序排序的数组在预先未知的某个点上进行了旋转。 用二分搜索法来搜索旋转数组的target值
 */
var search = function(nums, target) {
    const len = nums.length;
    if(!len) return -1
    if(len === 1) return nums[0] === target ?0 :-1;
    let left =0,right = len-1
    while(left <= right){
        let mid = Math.floor((left+right)/2)
        console.log(mid)
        if(nums[mid] === target) return mid;
        //因为数组是有序的，所以元素进行旋转数组也是有序的，判断头节点是否小于尾节点就可以得出是否是有序
        if(nums[0] <= nums[mid]){
            //如果targe在 0到mid之间,缩小搜索范围
            if(target >= nums[0] && target <= nums[mid]){
                right = mid-1
            }else{
                left = mid+1
            }
        }else{
            if(target > nums[mid] && target <= nums[len-1]){
                left = mid+1;
            }else{
                right =mid-1
            }
        }
    }
    return -1
};