/**
 * @param {number} rowIndex
 * @return {number[]}
 * 杨辉三角2
 */
var getRow = function(rowIndex) {
    let arr = [1];
    for(i = 0;i< rowIndex;i++){
        arr.unshift(0);
        for(j=0;j<i+1;j++){
            arr[j] =arr[j] + arr[j+1];
        }
    }
    return arr;
};
console.log(getRow(4))