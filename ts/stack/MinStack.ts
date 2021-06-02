class MinStack {
  constructor() {
    this.stack = [];
    this.miniIdx = 0;
  }

  stack: number[];

  miniIdx: number;

  push(val: number): void {
    this.stack.push(val);
    if (this._size() !== 0) {
      if (val < this.stack[this.miniIdx]) {
        this.miniIdx = this._size() - 1;
      }
    }
  }

  pop(): void {
    this.stack.pop();
    this.miniIdx = 0;
    this.stack.forEach((val, i) => {
      if (this.stack[this.miniIdx] > val) {
        this.miniIdx = i;
      }
    });
  }

  top(): number {
    return this.stack[this._size() - 1];
  }

  getMin(): number {
    return this.stack[this.miniIdx];
  }

  _size(): number {
    return this.stack.length;
  }
}

let stack = new MinStack();
stack.push(-2);
stack.push(0);
stack.push(-3);
console.log(stack.getMin());
stack.pop();
stack.top();
stack.getMin();
