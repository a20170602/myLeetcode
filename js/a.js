var maxSlidingWindow = function (nums, k) {
    if(k === 1) return nums;
    var result = [];
    var prefix = [];
    var max_cur = -Infinity;
    var pre = 0;
    // var ans = 0;
    for (var i = 0; i < nums.length; i++) {
        pre += nums[i];
        if (i >= k - 1) {
            prefix.push(pre);
        }


        // 记录当前最大值
        max_cur = max_cur > nums[i] ? max_cur : nums[i];

        if(i >= k - 1){
            result.push(max_cur);
            max_cur
        }



    }

    console.log('prefix==>', prefix);
    // for(var i = 0; i < nums.length - k + 1; i++){
    //     result[i] = Math.max.apply(Math,nums.slice(i,i+k));
    // }

    return result;
};

var nums = [7,2,4], k = 2;
console.log('result==>', maxSlidingWindow(nums, k))
