/**
 * 爬楼梯
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let ans =[1,2];
    if(n==1||n==2){
        return ans[n-1];
    }
    for(let i = 2;i<n;i++){
        ans[i]=ans[i-1]+ans[i-2];
    }
    return ans[n-1]

    // else {
    //     return climbStairs(n-1)+climbStairs(n-2);
    // }
};
console.log("climbStairs(44):", climbStairs(44));
// climbStairs(3)