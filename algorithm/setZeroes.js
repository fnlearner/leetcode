/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let columns=new Set(),rows=new Set();
    for(let row =0;row<matrix.length;row++){
        for(let column =0;column<matrix[row].length;column++){
            if(matrix[row][column]==0){
                columns.add(column);
                rows.add(row);
            }
        }
    }
    for(let row =0;row<matrix.length;row++){
        for(let column =0;column<matrix[row].length;column++){
           if(rows.has(row)||columns.has(column)){
               matrix[row][column]=0;
           }
        }
    }
    return matrix;
};

console.log("setZeroes([\r\n    [0,1,2,0],\r\n    [3,4,5,2],\r\n    [1,3,1,5]\r\n  ]):", setZeroes([
   [1,0]
  ]));
// setZeroes([
//     [0,1,2,0],
//     [3,4,5,2],
//     [1,3,1,5]
//   ])