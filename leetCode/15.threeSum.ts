// 给你一个包含 n 个整数的数组 nums，
// 判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。

function threeSum(nums: number[]): number[][] {
  nums = nums.sort((a, b) => a - b)
  if (nums.length < 3 || nums[nums.length - 1] < 0) {
    return []
  }
  const res: number[][] = []

  for (let count = 0; count < nums.length - 2;) {
    if (nums[count] > 0) break
    let i = count + 1, j = nums.length - 1
    while (i < j) {
      let sum = nums[count] + nums[i] + nums[j]
      if (sum > 0) {
        j--
      } else if (sum < 0) {
        i++
      } else {
        res.push([nums[count], nums[i], nums[j]])
        while (nums[i] === nums[++i]) { }
      }
    }
    while (nums[count] === nums[++count]) { }
  }
  return res
};
console.log(threeSum(
  [-1, 0, 1, 2, -1, -4]))

  console.log(threeSum([0,0,0,0]))