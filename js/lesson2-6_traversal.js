// es5中有多少种遍历方法?
// 1.for循环
const arr = [1, 2, 3, 4, 5]
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 2) {
    continue // continue代表退出当前循环继续下一循环,break代表退出所有循环
  }
  console.log(arr[i])
}

// 2.forEach
arr.forEach(function (item) {
  console.log(item)
})
// forEach循环和for循环除了表面写法不同外,深层次的区别是前者不支持break/continue语法,必须从头遍历到尾,不支持控制

// 3.every
/**
 * arr.every(callback[, thisArg])
 * callback用来测试每个元素的函数。被调用时传入三个参数：元素值，元素的索引，原数组。
 * thisArg,执行callback时使用的this值。
 */
// 3.1用every循环模拟for循环break效果,当元素等于2就退出
arr.every(function (item) {
  if (item === 2) {
    return false
  }
  console.log(item)
  return true
})
// 3.2用every循环模拟for循环continue效果,当元素等于2就跳过
arr.every(function (item) {
  if (item === 2) {

  } else {
    console.log(item)
  }
  return true
})
// every针对forEach循环存在的缺点进行了改进,可以用return true/false来针对特定条件进行控制
// every() 方法用于检测数组所有元素是否都符合指定条件（通过函数提供）。
// 如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。如果所有元素都满足条件，则返回 true。
// every和some区别: every() 每一项都返回true才返回true; some() 只要有一项返回true就返回true

// 4.for in
// for in 是为遍历对象设计的,虽然也能遍历数组,但是会有瑕疵
// 注意: 遍历数组时,由于数组也是对象,它的索引一般以为是数字,其实也可以是字符串,所以会存在问题
// 4.1
// arr.a = 8
for (let index in arr) {
  console.log(index, arr[index])
}
/**
 * 结果:
    0 1
    1 2
    2 3
    3 4
    4 5
    a 8
 */

// 4.2
for (let index in arr) {
  if (index === 2) {
    continue
  }
  console.log(index, arr[index])
}
// 输出结果同上述案列, 因为index===2用的完全等于,这里index是字符串(可能是默认遍历对象是object, index是key为字符串),所以该判断条件不会执行,会输出所有元素
// 若将该语句换成index==2,则输出结果会跳过2,因为只判断数值等于,不判断类型等于

// 4.3
for (let index in arr) {
  if (index == 2) {
    break
  }
  console.log(index, arr[index])
}
/**
 *
    0 1
    1 2
 */
// for in 也支持break/continue

// 5.es6中for of遍历方法
// for…of 遍历的是一切可遍历的元素（数组、对象、集合）, iterable
// 且支持break, continue, 在功能上非常接近原生的for循环
for (let item of arr) {
  console.log(item, arr[item])
}
/**
 * 结果:
    0 1
    1 2
    2 3
    3 4
    4 5
 */

/**
 * lesson2-11问题
 * 客户：老板给我来瓶最便宜的啤酒、最便宜的火腿肠、最便宜的打火机，多少钱？
 * 商户：稍等，我算下
 */
const Price = {
  A: [1.5, 2.3, 4.5],
  B: [3, 4, 5],
  C: [0.5, 0.8, 1.2],
  [Symbol.iterator] () {
    const _this = this
    const keys = Object.keys(this)
    let index = 0
    return {
      next () {
        return {
          value: Math.min.apply(null, _this[keys[index]]),
          done: index++ > (keys.length - 1)
        }
      }
    }
  }
}

for (let key of Price) {
  console.log('商品最低价格:', key)
}
