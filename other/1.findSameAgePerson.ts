
let userList = [{
  name: 'a', age: 19
}, {
  name: 'b', age: 19
}, {
  name: 'c', age: 18
}, {
  name: 'd', age: 18
}, {
  name: 'e', age: 17
}]

let map = new Map<number, string[]>()
userList.forEach(item => {
  const { age, name } = item
  let temp = map.get(age) || []
  temp.push(name)
  map.set(age, temp)
})
map.forEach((value, key) => {
  value.length > 1 && console.log(`年龄为${key}的人有：${value}`)
})