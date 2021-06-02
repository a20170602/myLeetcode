function addToArrayForm(num: number[], k: number): number[] {
  let res: number[] = [];
  const len = num.length;
  for (let i = 0; i < len || k > 0; i++) {
    // k % 10 的余数
    let kMod = k % 10;
    // k = k 去掉一位
    k = Math.floor(k / 10);

    let kAddN = 0;
    if (i >= len) {
      kAddN = kMod;
    } else {
      // k 加上 数组运算的最后一位
      kAddN = kMod + num[len - i - 1];
      // k += 上来的补位数
      k += Math.floor(kAddN / 10);
    }

    res.unshift(kAddN % 10);
  }

  console.log("res==>", res);
  return res;
}

let haystack = "",
  needle = "";

console.log(strStr(haystack, needle));

// console.log("haystack", haystack.slice(2, 1));


