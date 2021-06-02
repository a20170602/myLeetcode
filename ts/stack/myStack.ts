class MyStack {
  constructor() {
    this.stack = [];
  }
  stack: number[];

  push(x: number): void {
    this.stack.push(x);
  }

  pop(): number {
    if (this.stack.length === 0) return -1;
    let pop = this.stack.pop();
    return pop ? pop : -1;
  }

  top(): number {
    if (this.stack.length === 0) return -1;

    return this.stack[0];
  }

  size(): number {
    return this.stack.length;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }
}
