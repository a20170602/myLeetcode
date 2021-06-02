"use strict";
var CustomStack = /** @class */ (function () {
    function CustomStack(maxSize) {
        this.maxSize = maxSize;
        this.stack = [];
    }
    CustomStack.prototype.push = function (x) {
        if (this.stack.length === this.maxSize)
            return;
        this.stack.push(x);
    };
    CustomStack.prototype.pop = function () {
        if (this.stack.length === 0)
            return -1;
        var pop = this.stack.pop();
        return pop ? pop : -1;
    };
    CustomStack.prototype.increment = function (k, val) {
        for (var i = 0; i < k; i++) {
            if (this.stack[i] !== void 0) {
                this.stack[i] += val;
            }
        }
    };
    return CustomStack;
}());
