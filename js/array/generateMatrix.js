"use strict";
// 螺旋矩阵
function generateMatrix(n) {
    var result = [];
    for (var i_1 = 0; i_1 < n; i_1++) {
        result.push(new Array(n).fill(-1));
    }
    var i = 0, j = 0, dir = "right", count = 1;
    //判断方向函数
    var whichDirection = function (i, j) {
        if (i !== 0 && result[i - 1][j] === -1) {
            return "top";
        }
        else if (j !== n - 1 && result[i][j + 1] === -1) {
            return "right";
        }
        else if (i != n - 1 && result[i + 1][j] === -1) {
            return "bottom";
        }
        else {
            return "left";
        }
    };
    while (count <= Math.pow(n, 2)) {
        result[i][j] = count;
        switch (dir) {
            case "top":
                if (i === 0 || result[i - 1][j] !== -1) {
                    dir = whichDirection(i, j);
                    j++;
                }
                else {
                    i--;
                }
                break;
            case "right":
                if (j === n - 1 || result[i][j + 1] !== -1) {
                    dir = whichDirection(i, j);
                    console.log("dir==>", dir);
                    i++;
                }
                else {
                    j++;
                }
                break;
            case "bottom":
                if (i === n - 1 || result[i + 1][j] !== -1) {
                    dir = whichDirection(i, j);
                    console.log("dir==>", dir);
                    j--;
                }
                else {
                    i++;
                }
                break;
            case "left":
                if (j === 0 || result[i][j - 1] !== -1) {
                    dir = whichDirection(i, j);
                    i--;
                }
                else {
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
