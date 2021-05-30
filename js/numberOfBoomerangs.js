"use strict";
// 暴力破解法
// function numberOfBoomerangs(points: number[][]): number {
//   const len = points.length;
//   // 边界判断 小于3个点直接0
//   if (len < 3) {
//     return 0;
//   }
//   let result = 0;
//   // 判断a点和b点和c点距离是否一样
//   const isDistance = (a: number[], b: number[], c: number[]): boolean => {
//     return (
//       (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 ===
//         (a[0] - c[0]) ** 2 + (a[1] - c[1]) ** 2 ||
//       (b[0] - a[0]) ** 2 + (b[1] - a[1]) ** 2 ===
//         (b[0] - c[0]) ** 2 + (b[1] - c[1]) ** 2 ||
//       (c[0] - a[0]) ** 2 + (c[1] - a[1]) ** 2 ===
//         (c[0] - b[0]) ** 2 + (c[1] - b[1]) ** 2
//     );
//   };
//   for (let i = 0; i < points.length - 2; i++) {
//     for (let j = i + 1; j < points.length - 1; j++) {
//       for (let k = j + 1; k < points.length; k++) {
//         if (isDistance(points[i], points[j], points[k])) {
//           result += 2;
//         }
//       }
//     }
//   }
//   return result;
// }
function numberOfBoomerangs(points) {
    var len = points.length;
    // 边界判断 小于3个点直接0
    if (len < 3) {
        return 0;
    }
    var calcDisance = function (_a, _b) {
        var x0 = _a[0], y0 = _a[1];
        var x1 = _b[0], y1 = _b[1];
        return Math.pow((x0 - x1), 2) + Math.pow((y0 - y1), 2);
    };
    var result = 0;
    var map;
    // const maps:any[] = Array(len).fill(0);
    for (var i = 0; i < points.length; i++) {
        map = {};
        for (var j = 0; j < points.length; j++) {
            if (i !== j) {
                // 不是原点的时候
                var distance = calcDisance(points[i], points[j]);
                map[distance] = (map[distance] || 0) + 1;
            }
        }
        // 遍历一下map，计算数值
        for (var distance in map) {
            result += map[distance] * (map[distance] - 1);
        }
    }
    console.log("result==>", result);
    return result;
}
var points = [[0, 0], [1, 0], [2, 0]];
numberOfBoomerangs(points);
