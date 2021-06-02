"use strict";
// 常数时间插入、删除和获取随机元素
/**
 * 思路：利用数组最后插入和删除为O(1)来搞定
 *      需要使用map来记录，判断，和更新
 * */
var RandomizedSet = /** @class */ (function () {
    function RandomizedSet() {
        this.array = [];
        this.map = {};
    }
    RandomizedSet.prototype.insert = function (val) {
        if (this.map[val] === void 0) {
            this.array.push(val);
            this.map[val] = this._size() - 1;
            return true;
        }
        else {
            return false;
        }
    };
    RandomizedSet.prototype.remove = function (val) {
        if (this.map[val] === void 0) {
            return false;
        }
        var index = this.map[val];
        var lastIndex = this._size() - 1;
        if (index < lastIndex) {
            this._swap(index, lastIndex);
            this.map[this.array[index]] = index;
        }
        this.array.pop();
        delete this.map[val];
        return true;
    };
    RandomizedSet.prototype.getRandom = function () {
        return this.array[Math.floor(Math.random() * this._size())];
    };
    RandomizedSet.prototype._size = function () {
        return this.array.length;
    };
    RandomizedSet.prototype._swap = function (a, b) {
        var temp = this.array[b];
        this.array[b] = this.array[a];
        this.array[a] = temp;
    };
    return RandomizedSet;
}());
