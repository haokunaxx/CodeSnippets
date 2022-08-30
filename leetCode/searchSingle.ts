function searchSingle(numbers: number[]): number {
  numbers = numbers.sort((a, b) => a - b)
  while (numbers.length > 0) {
    if (numbers[0] === numbers[1]) {
      numbers.splice(0,2)
    } else {
      break
    }
  }
  return numbers[0]
}


console.log(searchSingle([2,2,1]))
console.log(searchSingle([4,1,2,1,2]))