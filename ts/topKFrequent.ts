function topKFrequent(nums: number[], k: number): number[] {
  interface item {
    id: number;
    frequent: number;
  }
  interface idxToObj {
    [key: string]: number;
  }
  let eleArr: item[] = [];
  let idIs: idxToObj = {};
  let result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (idIs[nums[i]] == undefined) {
      // 记录下标索引
      idIs[nums[i]] = eleArr.length;
      eleArr.push({
        id: nums[i],
        frequent: 0,
      });
    } else {
      eleArr[idIs[nums[i]]].frequent += 1;
    }
  }

  eleArr.sort((a, b) => {
    // console.log("a==>", a);
    return b.frequent - a.frequent;
  });

  let temp = eleArr.slice(0, k);

  result = temp.map((item) => Number(item.id));

  console.log(result);
  return result;
}

// let nums = [-1, -1, -1, 2, -2, -3],
//   k = 2;
// topKFrequent(nums, k);
