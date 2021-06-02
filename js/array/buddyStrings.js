"use strict";
// // 亲密字符串
// function buddyStrings(s: string, goal: string): boolean {
//   const sLen = s.length,
//     gLen = goal.length;
//   if (sLen !== gLen) return false;
//   const isSame = function (i: number, j: number): boolean {
//         let sArr = s.split('');
//         let temp = sArr[j];
//             sArr[j] = sArr[i];
//             sArr[i] = temp;
//         return sArr.join('') === goal;
//   };
//   for (let i = 0; i < sLen; i++) {
//     for (let j = i + 1; j < gLen; j++) {
//       // 判断
//       if(isSame(i, j)){
//           return true;
//       }
//     }
//   }
//   return false;
// }
// 亲密字符串
function buddyStrings(s, goal) {
    var sLen = s.length, gLen = goal.length;
    var indexArr = [], hasSame = false, map = new Map();
    if (sLen !== gLen)
        return false;
    if (sLen === 1)
        return false;
    if (s === "")
        return false;
    for (var i = 0; i < sLen; i++) {
        if (s[i] !== goal[i]) {
            indexArr.push(i);
        }
        if (map.has(s[i])) {
            hasSame = true;
        }
        else {
            map.set(s[i], 1);
        }
    }
    var _swap = function (i, j) {
        var temp = s[j];
        var sArr = s.split("");
        sArr[j] = sArr[i];
        sArr[i] = temp;
        return sArr.join("");
    };
    if (indexArr.length === 2) {
        if (_swap(indexArr[0], indexArr[1]) === goal) {
            return true;
        }
        else {
            return false;
        }
    }
    if (indexArr.length === 0) {
        if (hasSame) {
            return true;
        }
        return false;
    }
    return false;
}
var A = "abcd", B = "abcd";
console.log(buddyStrings(A, B));
