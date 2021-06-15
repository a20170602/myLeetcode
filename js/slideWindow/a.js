"use strict";
function maxVowels(s, k) {
    var res = 0, max = 0, left = 0, right = left + k, queue = s.slice(0, right), vowel = ["a", "e", "i", "o", "u"];
    for (var i = 0; i < queue.length; i++) {
        if (_isVowel(queue[i])) {
            res += 1;
        }
    }
    max = res;
    while (right <= s.length) {
        left++;
        right++;
        if (k > 1) {
            if (_isVowel(s[left - 1])) {
                res--;
            }
            if (_isVowel(s[right - 1])) {
                res++;
            }
        }
        else {
            if (_isVowel(s[right - 1])) {
                res++;
            }
            else {
                res--;
            }
        }
        max = max > res ? max : res;
    }
    function _isVowel(str) {
        return vowel.indexOf(str) !== -1;
    }
    return max;
}
console.log(maxVowels("tnfazcwrryitgacaabwm", 4));
