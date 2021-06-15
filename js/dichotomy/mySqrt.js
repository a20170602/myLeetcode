"use strict";
function mySqrt(x) {
    if (x === 1)
        return 1;
    var right = x;
    var left = 0;
    // 当两个数相乘大于x
    while (Math.abs(right - left) > 1) {
        var half = Math.ceil((right - left) / 2 + left);
        if (half * half === x) {
            return half;
        }
        else if (half * half > x) {
            right = half;
        }
        else if (half * half < x) {
            left = half;
        }
    }
    return left;
}
console.log(mySqrt(10));
