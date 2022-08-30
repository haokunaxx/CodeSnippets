function findIntersection(arr1: number[], arr2: number[]): number[] {
  let temp = arr1
  if (arr1.length > arr2.length) {
    arr1 = arr2
    arr2 = temp
  }
  arr1 = arr1.sort((a, b) => a - b)
  arr2 = arr2.sort((a, b) => a - b)
  let res: number[] = [],
    i = 0,
    j = 0
  while (i < arr1.length) {
    while (j < arr2.length) {
      if (arr1[i] === arr2[j]) {
        res.push(arr1[i])
        j++
        break
      }
      if (arr2[j] > arr1[i]) {
        break
      }
      j++
    }
    i++
  }
  return res
}


console.log(findIntersection([1, 2, 2, 1], [2, 2]))  //[2,2]
console.log(findIntersection([4, 9, 5], [9, 4, 9, 8, 4]))  //[4,9]