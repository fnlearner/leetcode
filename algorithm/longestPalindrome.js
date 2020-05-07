/**
 * @param {string} s
 * @return {number}
 * 最长回文子串长度
 */
var longestPalindrome = function(s) {
    let str = '*'
    let ans =1;
    for(let item of s){
        str+=`${item}*`
    }
    let index =0
    while(str[index]){
    
        let left = index-1
        let right = index+1
        let cur = str[index] === '*'?0:1;
        while(str[left]&&str[right]){
            if(str[left] === '*')--left
            if(str[right] === '*')++right
            if(str[left] === str[right]){
                left--;
                right++;
                cur+=2
            }else{
                break
            }
        }
        ans = Math.max(ans,cur)
        index++
    }
    // console.log(ans)
    return ans
     // const set = new Set()
    //  const map = new Map()
    //  for(let item of s){
    //      map[item] = ++map[item]||1
    //  }
    //  console.log(Object.values(map))
    //  const len = s.length
    //  const res = Object.values(map).reduce((sum,cur)=>{
    //      const add = cur&1 ?cur-1:cur
    //      return sum += add
    //  },0) ;

    //  return res<len?res+1:res
};
longestPalindrome('abccccdd')
/**
 * 
 * @param {string} s
 * 最长回文串 长度
 */
const _longestPalindrome = s =>{
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
}

/**
 * @param {string} s
 * @return {string}
 */

function preProcess(str){
    let len=str.length;
    if(len==0) return '^$';
    let strStart='^';
    for(let i of str){
        strStart+='#'+i;
     }        
     strStart+='#$'; 
     return strStart;
}
function ___longestPalindrome(str){
    let T=preProcess(str);
    let len=T.length;
    let P=[],C=0,R=0;
    for(let i=1;i<len-1;i++){
        let i_mirror=2*C-i;
        P[i]=(R>i)?Math.min(R-i,P[i_mirror]):0;

        while(T[i+1+P[i]]==T[i-1-P[i]]){
            P[i]++;
        }

        if(i+P[i]>R){
            C=i;
            R=i+P[i];
        }
    }
  let maxLen=0;
    let centerIndex=0;
    for(let i=0;i<len-1;i++){
        if(P[i]>maxLen){
            maxLen=P[i];
            centerIndex=i;
        }
    }
    return str.substr((centerIndex-1-maxLen)/2,maxLen);
}



// console.log(___longestPalindrome('abcccddddd'))