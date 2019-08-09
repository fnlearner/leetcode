/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length<=1) return intervals;
  intervals.sort((a,b) => {
    return a[0] - b[0];
  });
//   console.log(intervals)
  let len = intervals.length,res = [],i=0;
  while(i<len){
      let left = intervals[i][0];
      let right = intervals[i][1];
      while(i<len-1 && intervals[i+1][0]<=right){
          ++i;
          right = Math.max(intervals[i][1],right);
      }
      res.push([left,right]);
      ++i;
  }

  console.log("res:", res);
  return res;
};

// merge([[1, 3], [2, 6], [8, 10], [15, 18]]);

// merge([[1,4],[2,3]])

merge([[2,3],[0,1],[1,2],[3,4],[4,5],[1,1],[0,1],[4,6],[5,7],[1,1],[3,5]])