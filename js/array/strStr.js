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
