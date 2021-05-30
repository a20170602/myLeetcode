"use strict";
function strStr(haystack, needle) {
    // 边界判断
    if (needle === "") {
        return 0;
    }
    if (needle.length > haystack.length) {
        return -1;
    }
    if (needle.length === haystack.length) {
        if (needle === haystack) {
            return 0;
        }
        else {
            return -1;
        }
    }
    // 正常判断
    var hLen = haystack.length, nLen = needle.length;
    for (var i = 0; i < hLen - nLen + 1; i++) {
        if (haystack.slice(i, i + nLen) === needle) {
            return i;
        }
    }
    return -1;
}
function addToArrayForm(num, k) {
    var res = [];
    var len = num.length;
    for (var i = 0; i < len || k > 0; i++) {
        // k % 10 的余数
        var kMod = k % 10;
        // k = k 去掉一位
        k = Math.floor(k / 10);
        var kAddN = 0;
        if (i >= len) {
            kAddN = kMod;
        }
        else {
            // k 加上 数组运算的最后一位
            kAddN = kMod + num[len - i - 1];
            // k += 上来的补位数
            k += Math.floor(kAddN / 10);
        }
        res.unshift(kAddN % 10);
    }
    console.log("res==>", res);
    return res;
}
var haystack = "", needle = "";
console.log(strStr(haystack, needle));
// console.log("haystack", haystack.slice(2, 1));
/**
 * 思路：
 * 1.声明变量p0，p1 p0、p1两个指针分别对应遍历到0和1时候的指针
 * 2.当遍历到0的时候 交换p0、nums[i]的值 并且如果 p0 > p1 的时候，需要交换p1、p0 , p1 p0加1
 * 3.当遍历到1的时候 交换p1、nums[i]的值 p1加1
 * */
// https://leetcode-cn.com/problems/sort-colors/
function sortColors(nums) {
    var p0 = 0, p1 = 0;
    var swap = function (a, b) {
        var temp = nums[b];
        nums[b] = nums[a];
        nums[a] = temp;
    };
    var len = nums.length;
    for (var i = 0; i < len; i++) {
        if (nums[i] === 0) {
            swap(p0, i);
            if (p0 < p1) {
                swap(i, p1);
            }
            p0++;
            p1++;
        }
        else if (nums[i] === 1) {
            swap(p1, i);
            p1++;
        }
    }
    // console.log("num==>", nums);
}
sortColors([1, 0]);
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
