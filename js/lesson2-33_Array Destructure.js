// 数组的解构赋值
let [firstName, lastName] = ['james', 'bond']
console.log(firstName, lastName) // james bond

let [one, , three] = 'abcd'
console.log(one, three) // a c

let [first, , third] = new Set([1, 2, 3, 4])
console.log(first, third) // 1 3

// Tips: 左侧要有中括号包裹, 里面是新声明的变量, 右侧需要是可遍历对象, 这样就可以解构赋值

let user = { name: 'jack', age: 23 };
// 结构赋值不仅可以对新声明的变量赋值,还可以对对象已有的属性赋值,不过上面语句要加上分号(特别注意)
[user.name, user.age] = ['james', 20]
console.log(user)

let user2 = { name: 'jack', age: 23 }
for (let [key, value] of Object.entries(user2)) {
  // 隐式赋值| 显式索引 (此处是隐式赋值)
  console.log(key, value)
}
// name jack
// age 23

// !Note that typeof last is Array.
let [firName, secName, ...last] = [1, 2, 3, 4, 5, 6, 7, 8, 9] // ...last叫解构(rest)变量
console.log(firName, secName, last)
// 1 2 [3, 4, 5, 6, 7, 8, 9]

let options = {
  title: 'menu',
  // width: 200,
  height: 300
}
// 对象解构赋值简写形式时,{}里面变量必须和对象中属性名称一致
// let { title, width, height } = options

// 不使用简写形式时,可以这样写:
// options中没有width属性,还可以设置width默认值130
let { title: title2, width = 130, height } = options
console.log(title2, width, height) // menu 130 300

// 对象也可以用rest参数存储剩余的数据
let options2 = {
  title3: 'menu',
  width: 200,
  height: 300
}
let { title3, ...restData } = options2
console.log(title3, restData) // menu {width: 200, height: 300}

// 对于复杂的对象进行解构赋值
let options3 = {
  size: {
    width: 100,
    height: 200
  },
  items: ['cake', 'dount'],
  extra: true
}
let { size: { width: width3 }, items: [, item2], extra } = options3
console.log(width3, item2, extra) // 100 "dount" true

// 总结: 对于复杂数据结构的解构赋值,左侧变量的结构要和右侧数据的结构一致

/**
 * 练习:
 * 1.一个函数需要传入多个参数时,是否可以利用解构赋值来简化操作呢?
 * 2.如何在业务开发中对接口数据进行解构赋值?
 */

/**
  * 解构赋值重点是在赋值，赋值的元素是要拷贝出来赋值给变量，赋值的元素本身是不会被改变的。
 */
