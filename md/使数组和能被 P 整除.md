#### 代码

~~~javascript
var minSubarray = function (nums, p) {
    let res = Infinity;
    const sum = nums.reduce((pre, cur) => (pre += cur), 0);
    const len = nums.length
    const r = sum % p
    if (r === 0) return 0
    const prefixSum = new Array(nums.length + 1).fill(0)

    // 求解前缀和
    prefixSum[0] = 0
    for (let i = 1; i <= len; i++) {
        prefixSum[i] = prefixSum[i - 1] + nums[i - 1]
    }

    const preMap = {}
    for (let i = 0; i <= nums.length; i++) {
        const index = preMap[(prefixSum[i] - r) % p]
        if (index != undefined) {
            res = Math.min(res, i - index)
        }
        preMap[prefixSum[i] % p] = i
    }
    return (res === Infinity || res === len) ? -1 : res;
};
~~~

#### 复杂度

时间复杂度 O(N)

空间复杂度 O(N)