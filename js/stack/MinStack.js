"use strict";
var MinStack = /** @class */ (function () {
    function MinStack() {
        this.stack = [];
        this.miniIdx = 0;
    }
    MinStack.prototype.push = function (val) {
        this.stack.push(val);
        if (this._size() !== 0) {
            if (val < this.stack[this.miniIdx]) {
                this.miniIdx = this._size() - 1;
            }
        }
    };
    MinStack.prototype.pop = function () {
        var _this = this;
        this.stack.pop();
        this.miniIdx = 0;
        this.stack.forEach(function (val, i) {
            if (_this.stack[_this.miniIdx] > val) {
                _this.miniIdx = i;
            }
        });
    };
    MinStack.prototype.top = function () {
        return this.stack[this._size() - 1];
    };
    MinStack.prototype.getMin = function () {
        return this.stack[this.miniIdx];
    };
    MinStack.prototype._size = function () {
        return this.stack.length;
    };
    return MinStack;
}());
var stack = new MinStack();
stack.push(-2);
stack.push(0);
stack.push(-3);
console.log(stack.getMin());
stack.pop();
stack.top();
stack.getMin();
