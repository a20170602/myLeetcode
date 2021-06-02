// 逆波兰表达式求值
/**
逆波兰表达式：

逆波兰表达式是一种后缀表达式，所谓后缀就是指算符写在后面。

平常使用的算式则是一种中缀表达式，如 ( 1 + 2 ) * ( 3 + 4 ) 。
该算式的逆波兰表达式写法为 ( ( 1 2 + ) ( 3 4 + ) * ) 。
逆波兰表达式主要有以下两个优点：

去掉括号后表达式无歧义，上式即便写成 1 2 + 3 4 + * 也可以依据次序计算出正确结果。
适合用栈操作运算：遇到数字则入栈；遇到算符则取出栈顶两个数字进行计算，并将结果压入栈中。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/evaluate-reverse-polish-notation
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
 * */
function evalRPN(tokens: string[]): number {
  interface Symbol {
    [key: string]: number;
  }

  let stack: number[] = [];
  let symbol: Symbol = {
    "+": 0,
    "-": 1,
    "*": 2,
    "/": 3,
  };

  tokens.forEach((val) => {
    if (symbol[val] == void 0) {
      stack.push(Number(val));
    } else {
      let num1 = stack.pop();
      let num2 = stack.pop();

      switch (val) {
        case "+":
          stack.push((num2 ? num2 : 0) + (num1 ? num1 : 0));
          break;
        case "-":
          stack.push((num2 ? num2 : 0) - (num1 ? num1 : 0));
          break;
        case "*":
          stack.push((num2 ? num2 : 0) * (num1 ? num1 : 0));
          break;
        case "/":
            let res:number = (num2 ? num2 : 0) / (num1 ? num1 : 0);
          stack.push(Number.parseInt(String(res)));
          break;
      }
    }
  });

  return stack[0];
}

let tokens = [
  "10",
  "6",
  "9",
  "3",
  "+",
  "-11",
  "*",
  "/",
  "*",
  "17",
  "+",
  "5",
  "+",
];
console.log(evalRPN(tokens));
