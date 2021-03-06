"use strict";
// 给定字符串s="abcdefghijklmnopqrstuvwxyzabcd..."
// 输入一个字符串 p，输出 p 的子串的数量，满足条件
// 1，子串同时是 s 的子串
// 2，重复的子串不计数
// 3，子串在 p 中是连续的
// 4，子串在 s 中是连续的
// 5，子串是非空的
// 注意：p 不是无限循环字符串的根
// 举例
// 输入 p="a"，p 的子串有 "", "a"
// 满足条件的子串的数量是 1
// 输入 p="cac"，p的子串有 "", "c", "a", "ca", "ac", "cac"
// 满足条件的子串的数量是 2，也就是说 "ca"、"ac"、"cac"不是 s 的子串
// 输入 p="zab"，p的子串有 "", "z", "a", "b", "za", "ab", "zab"
// 满足条件的子串的数量是 6，也就是说 "z", "a", "b", "za", "ab", "zab" 都是 s 的子串
/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function (p) {
    var _a;
    if (!p.length) {
        return 0;
    }
    //用来记录子串
    var pre = 1, res = 0, hash = (_a = {},
        _a[p[0]] = 1,
        _a);
    for (var i = 1; i < p.length; i++) {
        if (p[i].charCodeAt() - p[i - 1].charCodeAt() === -25 ||
            p[i].charCodeAt() - p[i - 1].charCodeAt() === 1) {
            pre += 1;
        }
        else {
            pre = 1;
        }
        hash[p[i]] = hash[p[i]] ? Math.max(hash[p[i]], pre) : pre;
    }
    for (var key in hash) {
        res += hash[key];
    }
    return res;
};
findSubstringInWraproundString('abcd');
