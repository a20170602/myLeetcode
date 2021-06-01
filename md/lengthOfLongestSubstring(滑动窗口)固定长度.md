#### 思路

滑动窗口

1.l和r初始化为0

2.循环 r指针移动一步

3.maps是否具有r指针元素记录

​	没有，继续

​	有，判断result是否需要更新，处理maps的记录





#### 代码

~~~typescript
function lengthOfLongestSubstring(s: string): number {
  const len = s.length;
  if (len === 1) return 1;
  if (len === 0) return 0;
  interface Maps {
    [key: string]: number;
  }
  // 双指针
  let l = 0,
    r = 0,
    result = 0;
  let maps: Maps = {};

  while (r < len) {
    if (maps[s[r]] === void 0) {
      // 记录下标
      maps[s[r]] = r;
    } else {
      // 遇到一样的了
      result = result > r - l ? result : r - l;
      let point = maps[s[r]] + 1;
      // 更新map
      for (let i = l; i < point; i++) {
        if (s[i] === s[r]) {
          // 更新
          maps[s[i]] = r;
        } else {
          // 其余删除
          delete maps[s[i]];
        }
      }
      l = point;
    }

    r++;
  }

  return result > r - l ? result : r - l;
}
~~~



#### 复杂度

时间复杂度 最好的情况O(n)  最坏的情况O(n^2)

空间复杂度 O(n)