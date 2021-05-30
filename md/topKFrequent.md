### 思路

1.定义 变量eleArr:item[]  item{id:$id,frequent:$frequent}   $id为当前频率元素 $frequent出现频率

​					idIs:idxToObj {nums[i]:$idx }								$idx为nums[i]在eleArr记录频率的下标索引

2.遍历nums

- 如果idIs[nums[i]] == undefined，即当前元素没有被记录过
  - 1.在idIs记录nums[i]在eleArr记录频率的下标索引
  - 2.在eleArr添加item
- 如果当前元素被记录过
  - eleArr[idIs[nums[i]]].frequent 当前元素频率加一

3.使用数组sort方法排序

4.整理输出结果

#### 代码

~~~typescript
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

  return result;
}

~~~

#### 复杂度分析

设nums长度n ，单独元素的个数M（0<M<N）

时间复杂度 

遍历nums O(n) + sort排序O(M*log(M)) + O(K)



空间复杂度

O(M) + O(M) + O(K)