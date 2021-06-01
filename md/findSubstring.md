#### 思路

滑动窗口

*长度固定的word <|-|>要注意审题

固定长度的滑动窗口

声明一个Map结构变量来存储words字符数组的信息 key[string] val[个数]

循环判断满足条件，加入result



#### 代码

~~~typescript
function findSubstring(s: string, words: string[]): number[] {
  const map = new Map(),
    oneWordLen = words[0].length,
    wordsLen = words.join("").length;
  let result: number[] = [];

  for (let j = 0; j < words.length; j++) {
    if (map.has(words[j])) {
      let val = map.get(words[j]) + 1;
      map.set(words[j], val);
    } else {
      map.set(words[j], 1);
    }
  }

  const isOK = function (slideWindow: string, map: any): boolean {
    for (let i = 0; i < slideWindow.length; i += oneWordLen) {
      let oneWord = slideWindow.slice(i, i + oneWordLen);
      if (!map.has(oneWord)) break;

      let newVal = map.get(oneWord) - 1;
      if (newVal === 0) {
        map.delete(oneWord);
      } else {
        map.set(oneWord, newVal);
      }
    }

    return map.size === 0;
  };

  for (let l = 0; l <= s.length - wordsLen; l++) {
    let tempMap = new Map(map);

    if (isOK(s.slice(l, l + wordsLen), tempMap)) {
      result.push(l);
    }
  }
//   console.log("result==>", result);
  return result;
}
~~~

#### 复杂度分析

s[N] words[M] oneWordLen[L]

时间复杂度O(M) + O(N-M) * O(M / L) 

空间复杂度O(M)