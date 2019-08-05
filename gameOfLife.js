/**
 * leetcode 生命游戏
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    //额外空间法
  let tempArr = [];
  for (let i = 0; i < board.length; i++) {
    let [...arr] = board[i];
    tempArr.push(arr);
  }
  const flag = (point, data, flag) => {
    let count = 0;
    let top = 0,
      bottom = data.length - 1;
    //上下左右四个边界
    //八个点 循环三层
    if (top < point.x) {
      //说明当前节点的上一层节点存在至少一个节点
      for (let i = point.y - 1; i <= point.y + 1; i++) {
        if (data[point.x - 1][i] == flag) {
          ++count;
        }
      }
    }
    for (let i = point.y - 1; i <= point.y + 1; i++) {
      if (data[point.x][i] == flag && i != point.y) {
        ++count;
      }
    }
    if (bottom > point.x) {
      for (let i = point.y - 1; i <= point.y + 1; i++) {
        if (data[point.x + 1][i] == flag) {
          ++count;
        }
      }
    }
    return count;
  };
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[0].length; y++) {
      const point = {
        x,
        y
      };
      const count = flag(point, board, 1);
      if (count < 2 && board[x][y] == 1) {
        tempArr[x][y] = 0;
      } else if ((count == 2 || count == 3) && board[x][y] == 1) {
        tempArr[x][y] = 1;
      } else if (count > 3 && board[x][y] == 1) {
        tempArr[x][y] = 0;
      } else if (count == 3 && board[x][y] == 0) {
        tempArr[x][y] = 1;
      }
    }
  }

  return Object.assign(board, tempArr);
};

// console.log("gameOfLife([\r\n    [0,1,0],\r\n    [0,0,1],\r\n    [1,1,1],\r\n    [0,0,0]\r\n  ]):", gameOfLife([
//     [0,1,0],
//     [0,0,1],
//     [1,1,1],
//     [0,0,0]
//   ]));
// gameOfLife([
//     [0,1,0],
//     [0,0,1],
//     [1,1,1],
//     [0,0,0]
//   ]);

var _gameOfLife = function(board) {
    //原地算法
  const flag = (point, data, flag) => {
    let count = 0;
    let top = 0,
      bottom = data.length - 1;
    
    //上下左右四个边界
    //八个点 循环三层
    if (top < point.x) {
      //说明当前节点的上一层节点存在至少一个节点
      for (let i = point.y - 1; i <= point.y + 1; i++) {
        if (data[point.x - 1][i] == flag[0]||data[point.x - 1][i] == flag[1]) {
          ++count;
        }
      }
    }
    for (let i = point.y - 1; i <= point.y + 1; i++) {
      if ((data[point.x ][i] == flag[0]||data[point.x ][i] == flag[1]) && i != point.y) {
        ++count;
      }
    }
    if (bottom > point.x) {
      for (let i = point.y - 1; i <= point.y + 1; i++) {
        if (data[point.x +1][i] == flag[0]||data[point.x +1][i] == flag[1]) {
          ++count;
        }
      }
    }
    return count;
  };
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[0].length; y++) {
      const point = {
        x,
        y
      };
      //alive -> dead -2
      //dead -> alive 2
      const count = flag(point, board, [1,-2]);
      if (count < 2 && board[x][y] == 1) {
        board[x][y] = -2;
      } else if ((count == 2 || count == 3) && board[x][y] == 1) {
        board[x][y] = 1;
      } else if (count > 3 && board[x][y] == 1) {
        board[x][y] = -2;
      } else if (count == 3 && board[x][y] == 0) {
        board[x][y] = 2;
      }
    }
  }
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[0].length; y++) {
      if (board[x][y] == -2) {
        board[x][y]=0;
      } else if(board[x][y]==2){
        board[x][y]=1;
      }
    }
  }
  return board;
};

console.log("\r\n_gameOfLife([\r\n    [0,1,0],\r\n    [0,0,1],\r\n    [1,1,1],\r\n    [0,0,0]\r\n  ]):", 
_gameOfLife([
    [0,1,0],[0,0,1],[1,1,1],[0,0,0]
  ]));

_gameOfLife([
    [0,1,0],[0,0,1],[1,1,1],[0,0,0]
  ])