"use strict";
function decodeString(s) {
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        if (s[i] === "]") {
            var tempStr = "";
            var repeatNum = void 0, allStr = "";
            while (stack[stack.length - 1] !== "[") {
                tempStr = stack.pop() + tempStr;
            }
            // [ 出栈
            stack.pop();
            // repeatNum = stack.pop();
            while (Number(stack[stack.length - 1]) ||
                Number(stack[stack.length - 1]) === 0) {
                repeatNum = stack.pop() + (repeatNum === void 0 ? '' : repeatNum);
            }
            for (var j = 0; j < Number(repeatNum); j++) {
                allStr += tempStr;
            }
            stack.push(allStr);
        }
        else {
            stack.push(s[i]);
        }
    }
    return stack.join("");
}
console.log(decodeString("100[leetcode]"));
