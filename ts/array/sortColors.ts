/**
 * 思路：双指针
 * 1.声明变量p0，p1 p0、p1两个指针分别对应遍历到0和1的时候，当前0和1元素对应的位置指针，需要注意01位置可以会冲突，需要判断
 * 2.当遍历到0的时候 交换p0、nums[i]的值 并且如果 p0 > p1 的时候，需要交换p1、p0 , p1 p0加1
 * 3.当遍历到1的时候 交换p1、nums[i]的值 p1加1
 * */
// https://leetcode-cn.com/problems/sort-colors/
function sortColors(nums: number[]): void {
    let p0 = 0,
      p1 = 0;
  
    const swap = (a: number, b: number) => {
      let temp = nums[b];
      nums[b] = nums[a];
      nums[a] = temp;
    };
  
    const len = nums.length;
    for (let i = 0; i < len; i++) {
      if (nums[i] === 0) {
        swap(p0, i);
        if (p0 < p1) {
          swap(i, p1);
        }
        p0++;
        p1++;
      } else if (nums[i] === 1) {
        swap(p1, i);
        p1++;
      }
    }
  
    // console.log("num==>", nums);
  }
  
  sortColors([1, 0]);