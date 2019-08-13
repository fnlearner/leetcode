/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

var uniquePaths = function(m, n) {     
    // if(m===1||n===1)
    //     return 1;
    // else if(m == 2 && n == 2)
	// 	return 2;
	// else if((m == 3 && n == 2) || (m == 2 && n == 3))
    //     return 3;
    // return uniquePaths(m,n-1)+uniquePaths(m-1,n);
    let temp = [];
    for(let i=0;i<m;i++){
        let temp_n=[];
        for(let j =0;j<n;j++){
            temp_n.push(0);
        }
        temp.push(temp_n);
    }
    for(let i =0;i<m;i++){
        for(let j =0;j<n;j++){
            if(i==0||j==0){
                temp[i][j]=1;
                continue;
            }
            temp[i][j]=temp[i-1][j]+temp[i][j-1];
        }
       
    }
    return temp[m-1][n-1];
};

// console.log("uniquePaths(51,9):", uniquePaths(51,9));
// uniquePaths(51,9)


/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths_2 = function(m, n) {
    var a= new Array(n).fill(1);
    var dp=new Array(m).fill(a);
    for(var i=1; i<m; i++){
        for(var j=1; j<n; j++){
            dp[i][j]=dp[i-1][j] + dp[i][j-1];
        }
    }
    return dp[m-1][n-1];
};