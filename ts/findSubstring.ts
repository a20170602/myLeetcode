/**
 * 思路:滑动窗口
 * 窗口固定 words.string.length 加和
 * 需要一个Map记录words字符串数组的各种组合
 * 长度相同的单词(以后记得审题)
 * */
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

findSubstring("lingmindraboofooowingdingbarrwingmonkeypoundcake", ["fooo","barr","wing","ding","wing"]);
