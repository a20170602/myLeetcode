#### 思路

之间线形查找



#### 代码

~~~typescript
function searchInsert(nums: number[], target: number): number {
  for(let i = 0; i < nums.length; i++){
        if(nums[i] >= target){
            return i;
        }
    }

    return nums.length;
};
~~~

#### 复杂度

时间复杂度O(N)

空间复杂度O(1)

