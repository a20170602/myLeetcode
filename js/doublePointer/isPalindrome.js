"use strict";
function isPalindrome(x) {
    var stringX = String(x);
    var left = 0;
    var right = stringX.length - 1;
    while (left < right) {
        if (stringX[left] !== stringX[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
// console.log("1", isPalindrome(121));
