// function lengthOfLongestSubstring(s: string): number {
//   if (!s) return 0
//   let max = 1;
//   for (let i = 0, len = s.length; i < len; i++) {
//     let temp = s[i],
//       tempMax = 1
//     for (let j = i + 1; j < len; j++) {
//       if (!temp.includes(s[j])) {
//         temp = temp + s[j];
//         tempMax++
//         tempMax > max && (max = tempMax)
//       } else {
//         break
//       }
//     }
//   }
//   return max
// };


// 动态窗口
// function lengthOfLongestSubstring(s: string): number {
//   if (!s) return 0;
//   let set = new Set<string>()
//   let i = 0,
//     j = 0,
//     maxLength = 1,
//     len = s.length
//   for (; i < len; i++) {
//     let temp = s[i]
//     if (!set.has(temp)) {
//       set.add(temp)
//       maxLength = Math.max(maxLength, set.size)
//     } else {
//       while (set.has(temp)) {
//         set.delete(s[j])
//         j++
//       }
//       set.add(temp)
//     }
//   }
//   return maxLength
// }

function lengthOfLongestSubstring(s: string): number {
  var map1 = new Map();
  var maxnum = 0, i = 0, j = 0;
  while (j < s.length) {
    i = map1.has(s[j]) ? Math.max(map1.get(s[j]) + 1, i) : i;
    map1.set(s[j], j++);
    maxnum = Math.max(j - i, maxnum);
  }
  return maxnum;
};


console.log(lengthOfLongestSubstring('abcdabcbb'))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring("aab"))