/**
 * leetcode 螺旋矩阵
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(!matrix.length) return [];
    let top =0,bottom=matrix.length-1,left=0,right=matrix[0].length-1;
    let ans =[];
    while(true){
        for(let i = left;i <=right;i++){
            ans.push(matrix[top][i]);
        }
        if(++top>bottom) break;
        for(let i = top;i <=bottom;i++){
            ans.push(matrix[i][right]);
        }
        if(--right<left) break;
        for(let i = right;i >=left;i--){
            ans.push(matrix[bottom][i]);
        }
        if(--bottom<top) break;
        for(let i = bottom;i >=top;i--){
            ans.push(matrix[i][left]);
        }
        if(++left>right) break;
    }
    return ans;
};
spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12]
  ]);