"use strict";
function validateStackSequences(pushed, popped) {
    var stack = [];
    var pushedIdx = 0;
    var len = pushed.length;
    var popFirst = popped.shift();
    while (popped.length > 0 && pushedIdx <= len) {
        if ((stack.length > 0 && stack[stack.length - 1]) === popFirst) {
            stack.pop();
            popFirst = popped.shift();
        }
        else {
            stack.push(pushed[pushedIdx]);
            pushedIdx++;
        }
    }
    return popped.length === 0;
}
var pushed = [1, 2, 3, 4, 5], popped = [4, 3, 5, 1, 2];
console.log(validateStackSequences(pushed, popped));
