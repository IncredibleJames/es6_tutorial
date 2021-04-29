// Set数据结构, Set存储的数据不允许是重复的,有重复会自动过滤掉重复数据
// let s = new Set([1, 2, 3, 4]) // Set可接收的数据是一个可遍历的对象,不一定是数组
let s = new Set()
// 写入数据
s.add('hello').add('world').add('hello')

// 删除数据
// s.delete('hello')

// 清空数据
// s.clear()

// 查找数据
// s.has('hello') // true

// Set实例的成员总数
// s.size // 2

console.log(s.keys(), s.values()) // 均返回 SetIterator{"hello", "world"},所以Set本质上还是对象
console.log(s.entries()) // SetIterator{"hello" => "hello", "world" => "world"}, 返回键值对
// 遍历数据
s.forEach(item => {
  console.log(item)
})
/*
  结果:
  hello
  world
*/
for (let item of s) {
  console.log(item)
}
// 结果同上

// 修改数据, 通过先删除再添加的方式, Set没有提供直接修改数据的api
