// Map数据结构
// Map是字典类型的数据结构,存取数据性能比Object要高
let map = new Map([[1, 2], [3, 4]])
console.log(map)
// Map中接收一个可遍历对象, [1, 2]和[3, 4]分别是其中元素, 1和3分别是元素的key, Map中key可以是任意类型的值,如数值,函数等

// 添加以及修改数据 map.set()方法
let map2 = new Map()
map2.set('a', 1)
map2.set('b', 2)
map2.set('a', '3') // 对键'a'赋值两次，后一次的值覆盖前一次的值。
console.log(map2) // {"a" => "3", "b" => 2}

// 删除数据
// map2.delete('a') // {"b" => 2}
// 清空数据
// map2.clear() // {}
// console.log(map2.size) // 0
console.log(map2.has('c')) // false, 查找的是元素的key值,不是value值
console.log(map2.get('a')) // '3'

console.log(map2.keys(), map2.values(), map2.entries())
/*
  结果:
  MapIterator{"a", "b"}
  MapIterator{"3", 2}
  MapIterator{"a" => "3", "b" => 2}
*/

map2.forEach((value, key) => {
  console.log(value, key)
}) // 注意forEach遍历的函数参数顺序依次是value, key

// for ... of后跟的一定是可遍历对象,遍历的顺序根据map对象初始化时添加的成员顺序一致
for (let [key, value] of map2) {
  console.log(key, value)
}

// Map的key可以是任意数据类型,对象,函数等等均可以
let o = function () {
  console.log('o')
}
map2.set(o, 4)
console.log(map2)

// ====================================================
// https://es6.ruanyifeng.com/#docs/set-map
// 注意，只有对同一个对象的引用，Map 结构才将其视为同一个键。
const map3 = new Map()
map3.set(['a'], 555)
map3.get(['a']) // undefined
/*
  解析:
  上面代码的set和get方法，表面是针对同一个键，但实际上这是两个不同的数组实例，
  内存地址是不一样的，因此get方法无法读取该键，返回undefined
*/

// 同理，同样的值的两个实例，在 Map 结构中被视为两个键。
const map4 = new Map()

const k1 = ['a']
const k2 = ['a']

map4
  .set(k1, 111)
  .set(k2, 222)

map4.get(k1) // 111
map4.get(k2) // 222
// 上面代码中，变量k1和k2的值是一样的，但是它们在 Map 结构中被视为两个键。
/*
  小结:
  由上可知，Map 的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。
  这就解决了同名属性碰撞（clash）的问题，我们扩展别人的库的时候，
  如果使用对象作为键名，就不用担心自己的属性与原作者的属性同名。
*/
