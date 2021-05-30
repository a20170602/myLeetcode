"use strict";
// // 输入：nums = [2,7,11,15], target = 9
// // 输出：[0,1]
// // 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
// /**
//  * @param nums
//  * @param target
//  * @returns number[]
//  */
// function twoSum(nums: number[], target: number): number[] {
//   interface mapObj {
//     [key: string]: number;
//   }
//   // 记录索引
//   const mapObj: mapObj = {};
//   // 结果
//   let result: number[] = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (i !== 0) {
//       // 判断条件，当当前nums[i]在mapObj对象的key出现时候，结束
//       let temp = mapObj[nums[i]];
//       if (temp !== void 0) {
//         result[0] = temp;
//         result[1] = i;
//         return result;
//       }
//     }
//     // 需要放在判断后面，防止key导致的覆盖索引
//     mapObj[target - nums[i]] = i;
//   }
//   return result;
// }
// // let nums = [2, 7, 11, 15],
// //   target = 9;
// // let nums = [3, 2, 4],
// //   target = 6;
// let nums = [3,3], target = 6;
// console.log("twoSum==>", twoSum(nums, target));
