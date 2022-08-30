// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。

// 输入：strs = ["flower","flow","flight"]
// 输出："fl"
function longestCommonPrefix(strs: string[]): string {
  strs = strs.sort((a, b) => a.length - b.length)
  let temp = strs[0]
  while (temp) {
    let len = strs.length - 1
    while (len > 0) {
      if (!strs[len--].startsWith(temp)) break;
    }
    if (len === 0) {
      break;
    }
    temp = temp.slice(0, -1)
  }
  return temp
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]))