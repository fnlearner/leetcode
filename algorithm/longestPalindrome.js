/**
 * @param {string} s
 * @return {number}
 * 最长回文串
 */
var longestPalindrome = function(s) {
    // let str = '*'
    // let ans =1;
    // for(let item of s){
    //     str+=`${item}*`
    // }
    // let index =0
    // while(str[index]){
    
    //     let left = index-1
    //     let right = index+1
    //     let cur = str[index] === '*'?0:1;
    //     while(str[left]&&str[right]){
    //         if(str[left] === '*')--left
    //         if(str[right] === '*')++right
    //         if(str[left] === str[right]){
    //             left--;
    //             right++;
    //             cur+=2
    //         }else{
    //             break
    //         }
    //     }
    //     ans = Math.max(ans,cur)
    //     index++
    // }
    // console.log(ans)
    // return ans
     // const set = new Set()
     const map = new Map()
     for(let item of s){
         map[item] = ++map[item]||1
     }
     console.log(Object.values(map))
     const len = s.length
     const res = Object.values(map).reduce((sum,cur)=>{
         const add = cur&1 ?cur-1:cur
         return sum += add
     },0) ;
     return res<len?res+1:res
};

longestPalindrome('abccccdd')