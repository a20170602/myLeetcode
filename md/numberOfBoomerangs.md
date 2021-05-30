#### 思路

三重循环，暴力破解



#### 代码

```typescript
function numberOfBoomerangs(points: number[][]): number {

  const len = points.length;
  // 边界判断 小于3个点直接0
  if (len < 3) {
    return 0;
  }

  let result = 0;
  // 判断a点和b点和c点距离是否一样
  const isDistance = (a: number[], b: number[], c: number[]): boolean => {
    return (
      (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 ===
        (a[0] - c[0]) ** 2 + (a[1] - c[1]) ** 2 ||
      (b[0] - a[0]) ** 2 + (b[1] - a[1]) ** 2 ===
        (b[0] - c[0]) ** 2 + (b[1] - c[1]) ** 2 ||
      (c[0] - a[0]) ** 2 + (c[1] - a[1]) ** 2 ===
        (c[0] - b[0]) ** 2 + (c[1] - b[1]) ** 2
    );
  };

  for (let i = 0; i < points.length - 2; i++) {
    for (let j = i + 1; j < points.length - 1; j++) {
      for (let k = j + 1; k < points.length; k++) {
        if (isDistance(points[i], points[j], points[k])) {
          result += 2;
        }
      }
    }
  }
  return result;
}
```

#### 复杂度分析

时间复杂度O(n^3)

空间复杂度O(1)