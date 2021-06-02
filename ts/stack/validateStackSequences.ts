function validateStackSequences(pushed: number[], popped: number[]): boolean {
  let stack = [];
  let pushedIdx = 0;
  let len = pushed.length;
  let popFirst = popped.shift();
  while (popped.length > 0 && pushedIdx <= len) {
    if ((stack.length > 0 && stack[stack.length - 1]) === popFirst) {
      stack.pop();
      popFirst = popped.shift();
    } else {
      stack.push(pushed[pushedIdx]);
      pushedIdx++;
    }
  }

  return popped.length === 0;
}
let pushed = [1,2,3,4,5], popped = [4,3,5,1,2];
console.log(validateStackSequences(pushed, popped));
