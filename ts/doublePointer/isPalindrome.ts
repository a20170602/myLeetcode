function isPalindrome(x: number): boolean {
  let stringX = String(x);
  let left = 0;
  let right = stringX.length - 1;

  while (left < right) {
    if (stringX[left] !== stringX[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

// console.log("1", isPalindrome(121));
