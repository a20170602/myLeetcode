"use strict";
// 求出不大于K的子数组的个数
// [1,3,4] => [1] [3] [4] [1,3] [1,4] [1,3,4] 不大于3的子数组有[1] [3] [1,3] 返回3
function countSubArray(k, nums) {
    var ans = 0;
    var pre = 0;
    for (var _ in nums) {
        // console.log(_);
        if (nums[_] <= 3) {
            pre += 1;
        }
        else {
            pre = 0;
        }
        ans += pre;
    }
    return ans;
}
var nums = [1, 3, 4];
countSubArray(3, nums);
console.log("ans==>", countSubArray(3, nums));
