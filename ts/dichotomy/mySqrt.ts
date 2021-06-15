function mySqrt(x: number): number {
  if (x === 1) return 1;
  let right = x;
  let left = 0;

  // 当两个数相乘大于x
  while (Math.abs(right - left) > 1) {
    let half = Math.ceil((right - left) / 2 + left);
    if (half * half === x) {
      return half;
    } else if (half * half > x) {
      right = half;
    } else if (half * half < x) {
      left = half;
    }
  }

  return left;
}

console.log(mySqrt(10));
