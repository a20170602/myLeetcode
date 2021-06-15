// function minSubarray(nums: number[], p: number): number {
//   //   const sum = nums.reduce((acc, cur) => (acc % p) + (cur % p));
//   let sum = 0;
//   nums.forEach((val, i) => {
//     nums[i] = val % p;
//     sum += nums[i];
//   });
//   if (sum === 0 || sum % p === 0) return 0;

//   let res = Number.MAX_SAFE_INTEGER;

//   for (let i = 0; i < nums.length; i++) {
//     let tempSum = sum;
//     let j = i;
//     let count = 0;
//     while (j < nums.length && count < res) {
//       tempSum -= nums[j];
//       count++;
//       j++;
//       if (tempSum % p === 0) {
//         if (count === 1) {
//           return 1;
//         } else if (count === nums.length) {
//           break;
//         } else {
//           res = res < count ? res : count;
//           break;
//         }
//       }
//     }
//   }

//   return res === Number.MAX_SAFE_INTEGER ? -1 : res;
// }


// var minSubarray = function (nums, p) {
//     let res = Infinity;
//     const sum = nums.reduce((pre, cur) => (pre += cur), 0);
//     const len = nums.length
//     const r = sum % p
//     if (r === 0) return 0
//     const prefixSum = new Array(nums.length + 1).fill(0)

//     prefixSum[0] = 0
//     for (let i = 1; i <= len; i++) {
//         prefixSum[i] = prefixSum[i - 1] + nums[i - 1]
//     }

//     const preMap = {}
//     for (let i = 0; i <= nums.length; i++) {
//         const index = preMap[(prefixSum[i] - r) % p]
//         if (index != undefined) {
//             res = Math.min(res, i - index)
//         }
//         preMap[prefixSum[[i] % p] = i;
//     }
//     return (res === Infinity || res === len) ? -1 : res;
// };


// let nums = [6, 3, 5, 2],
//   p = 9;
// console.log(minSubarray(nums, p));
