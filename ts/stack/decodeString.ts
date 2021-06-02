function decodeString(s: string): string {
  let stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "]") {
      let tempStr = "";
      let repeatNum: any,
        allStr = "";
      while (stack[stack.length - 1] !== "[") {
        tempStr = stack.pop() + tempStr;
      }
      // [ 出栈
      stack.pop();
      // repeatNum = stack.pop();
      while (
        Number(stack[stack.length - 1]) ||
        Number(stack[stack.length - 1]) === 0
      ) {
        repeatNum = stack.pop() + (repeatNum === void 0 ? '' : repeatNum);
      }

      for (let j = 0; j < Number(repeatNum); j++) {
        allStr += tempStr;
      }
      stack.push(allStr);
    } else {
      stack.push(s[i]);
    }
  }

  return stack.join("");
}

console.log(decodeString("100[leetcode]"));
