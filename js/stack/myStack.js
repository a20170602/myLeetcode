"use strict";
var MyStack = /** @class */ (function () {
    function MyStack() {
        this.stack = [];
    }
    MyStack.prototype.push = function (x) {
        this.stack.push(x);
    };
    MyStack.prototype.pop = function () {
        if (this.stack.length === 0)
            return -1;
        var pop = this.stack.pop();
        return pop ? pop : -1;
    };
    MyStack.prototype.top = function () {
        if (this.stack.length === 0)
            return -1;
        return this.stack[0];
    };
    MyStack.prototype.size = function () {
        return this.stack.length;
    };
    MyStack.prototype.isEmpty = function () {
        return this.size() === 0;
    };
    return MyStack;
}());
