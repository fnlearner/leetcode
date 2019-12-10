/**
 * @param {string} s
 * @return {number}
 * 给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。
 */
const longestValidParentheses = function (s) {
    let max = 0;
    const len = s.length;
    if(!s) return max;
    let dp = Array.from({length:len}).fill(0);
    for(let i =0;i<len;i++){
        if(s.charAt(i) === ')' && s[i-1] === '('){
            dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
        }else if(i - dp[i - 1] > 0 && s.charAt(i) === ')'&& s.charAt(i - dp[i - 1] - 1) === '('){
            dp[i] = dp[i - 1] + ((i - dp[i - 1]) >= 2 ? dp[i - dp[i - 1] - 2] : 0) + 2;
        }
        max = Math.max.apply(null,[max,dp[i]])
    }
    console.log(max)
    return max;
};

longestValidParentheses("(())");