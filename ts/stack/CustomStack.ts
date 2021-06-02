class CustomStack {
  constructor(maxSize: number) {
    this.maxSize = maxSize;
    this.stack = [];
  }

  maxSize: number;
  stack: number[];

  push(x: number): void {
    if (this.stack.length === this.maxSize) return;

    this.stack.push(x);
  }

  pop(): number {
    if (this.stack.length === 0) return -1;
    let pop = this.stack.pop();
    return pop ? pop : -1;
  }

  increment(k: number, val: number): void {
    for (let i = 0; i < k; i++) {
      if (this.stack[i] !== void 0) {
        this.stack[i] += val;
      }
    }
  }
}
