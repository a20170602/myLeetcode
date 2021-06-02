// 螺旋矩阵
function generateMatrix(n: number): number[][] {
  let result: number[][] = [];
  for (let i = 0; i < n; i++) {
    result.push(new Array(n).fill(-1));
  }

  let i = 0,
    j = 0,
    dir = "right",
    count = 1;

  //判断方向函数
  const whichDirection = (i: number, j: number): string => {
    if (i !== 0 && result[i - 1][j] === -1) {
      return "top";
    } else if (j !== n - 1 && result[i][j + 1] === -1) {
      return "right";
    } else if (i != n - 1 && result[i + 1][j] === -1) {
      return "bottom";
    } else {
      return "left";
    }
  };

  while (count <= n ** 2) {
    result[i][j] = count;

    switch (dir) {
      case "top":
        if (i === 0 || result[i-1][j] !== -1) {
            dir = whichDirection(i, j);
            j++;
          } else {
            i--;
          }
        break;
      case "right":
        if (j === n - 1 || result[i][j+1] !== -1) {
          dir = whichDirection(i, j);
          console.log("dir==>", dir);
          i++;
        } else {
          j++;
        }
        break;
      case "bottom":
        if (i === n - 1 || result[i+1][j] !== -1) {
            dir = whichDirection(i, j);
            console.log("dir==>", dir);
            j--;
          } else {
            i++;
          }
        break;
      case "left":
        if (j === 0 || result[i][j-1] !== -1) {
            dir = whichDirection(i, j);
            i--;
          } else {
            j--;
          }
        break;
    }

    count++;
  }

//   console.log("result==>", result);
  return result;
}

generateMatrix(1);
