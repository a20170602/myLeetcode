// function lengthOfLongestSubstring(s: string): number {
//   const len = s.length;
//   if (len === 1) return 1;
//   if (len === 0) return 0;
//   interface Maps {
//     [key: string]: number;
//   }
//   // 双指针
//   let l = 0,
//     r = 0,
//     result = 0;
//   let maps: Maps = {};

//   while (r < len) {
//     if (maps[s[r]] === void 0) {
//       // 记录下标
//       maps[s[r]] = r;
//     } else {
//       // 遇到一样的了
//       result = result > r - l ? result : r - l;
//       let point = maps[s[r]] + 1;
//       // 更新map
//       for (let i = l; i < point; i++) {
//         if (s[i] === s[r]) {
//           // 更新
//           maps[s[i]] = r;
//         } else {
//           // 其余删除
//           delete maps[s[i]];
//         }
//       }
//       l = point;
//     }

//     r++;
//   }

//   return result > r - l ? result : r - l;
// }

var lengthOfLongestSubstring = function (s: string) {
  // 哈希集合，记录每个字符是否出现过
  const occ = new Set();
  const n = s.length;
  // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
  let rk = -1,
    ans = 0;
  for (let i = 0; i < n; ++i) {
    if (i != 0) {
      // 左指针向右移动一格，移除一个字符
      occ.delete(s.charAt(i - 1));
    }
    while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
      // 不断地移动右指针
      occ.add(s.charAt(rk + 1));
      ++rk;
    }
    // 第 i 到 rk 个字符是一个极长的无重复字符子串
    ans = Math.max(ans, rk - i + 1);
  }
  return ans;
};

console.log(lengthOfLongestSubstring("abcba"));
