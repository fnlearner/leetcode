/**
 * @param {number[]} nums
 * @return {number[]}
 * @description 找到数组中只出现一次的数字，数字固定为两个
 */
var singleNumbers = function(nums) {
    const hash =new Map()
    for(let item of nums){
        // console.log(item)
        if(!hash.has(item)){
            hash.set(item,1)
        }else{
            hash.delete(item)
        }
    }
    return [...hash.keys()]
};

var _singleNumbers = function(nums) {
    let sum = 0
    for(let item of nums){
        sum^=item
    }
    let first =1
    let a=0,b=0
    // << 是位运算符 ，代表二进制中向左移动一位，所以 1<< 1 就是 01 << 1  => 010 也就是2 
    //因为数组中有且仅有两个数字不同，所以它们的二进制中至少有一位是不同的，根据&运算符的运算规则，相同的两个数字进行&运算得出结果是0，不同的两个数字进行&运算结果是1，
    //所以只要在二进制中找到第一个不为0的进制位
    while((sum&first) === 0){
        first = first <<1
    }
    for(let item of nums){
        if((item&first )=== 0)
            a^=item
        else
            b^=item
    }
    return [a,b]
};
_singleNumbers([4,1,4,8])

