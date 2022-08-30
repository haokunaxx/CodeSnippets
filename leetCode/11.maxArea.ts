// 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。

// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 返回容器可以储存的最大水量。

// 说明：你不能倾斜容器。

// for循环
// function maxArea(height: number[]): number {
//   const len = height.length;

//   let maxAreaVal = 0;
//   const getArea = (y, x1, x2) => y * (x2 - x1);
//   const getSmallVal = (val1, val2) => (val1 > val2 ? val2 : val1);
//   for (let i = 0; i < len - 1;) {
//     // let j = len - 1;
//     let iVal = height[i],
//       jVal,
//       // smallVal,
//       areaTemp;
//     // while (j > i) 
//     // while (j > (maxAreaVal / iVal) + i) {
//     //   if (iVal === 1) {
//     //     if (maxAreaVal !== 0) {
//     //       break;
//     //     }
//     //     // areaTemp = getArea(1, i, j);
//     //     areaTemp = j - i
//     //     maxAreaVal < areaTemp && (maxAreaVal = areaTemp);
//     //     break;
//     //   }
//     //   // i作为大的值，到数组最后一位的距离已经小于最大面积时，跳出循环
//     //   // if ((maxAreaVal / iVal) > (j - i)) {
//     //   //   break
//     //   // }
//     //   jVal = height[j];
//     //   // smallVal = getSmallVal(iVal, jVal);
//     //   areaTemp = getArea(getSmallVal(iVal, jVal), i, j);
//     //   // areaTemp = getArea(iVal > height[j] ? height[j] : iVal, i, j);
//     //   maxAreaVal < areaTemp && (maxAreaVal = areaTemp);
//     //   j--;
//     // }
//     for (let j = len - 1; j > (maxAreaVal / iVal) + i;) {
//       if (iVal === 1) {
//         if (maxAreaVal !== 0) {
//           break;
//         }
//         // areaTemp = getArea(1, i, j);
//         areaTemp = j - i
//         maxAreaVal < areaTemp && (maxAreaVal = areaTemp);
//         break;
//       }
//       // i作为大的值，到数组最后一位的距离已经小于最大面积时，跳出循环
//       // if ((maxAreaVal / iVal) > (j - i)) {
//       //   break
//       // }
//       jVal = height[j];
//       // smallVal = getSmallVal(iVal, jVal);
//       areaTemp = getArea(getSmallVal(iVal, jVal), i, j);
//       // areaTemp = getArea(iVal > height[j] ? height[j] : iVal, i, j);
//       maxAreaVal < areaTemp && (maxAreaVal = areaTemp);
//       j--;
//     }
//     while (iVal === height[++i]) { }
//   }
//   return maxAreaVal;
// };

// 双指针
function maxArea(height: number[]): number {
  let maxVal = 0,
    start = 0, end = height.length - 1,
    temp
  while (end > start) {
    temp = (end - start) * (height[end] > height[start] ? height[start++] : height[end--])
    temp > maxVal && (maxVal = temp)
  }
  return maxVal
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
console.log(maxArea([0, 2]))
console.log(maxArea([4, 3, 2, 1, 4]))
console.log(maxArea([1, 8, 100, 2, 100, 4, 8, 3, 7]))