// es6如何查找数组?
// 1.Array.prototype.find
/*
  arr.find(callback[, thisArg])
    callback: 在数组每一项上执行的函数，接收 3 个参数，element、index、array, 非空
    thisArg: 执行回调时用作 this 的对象
*/

/**
 * es5的filter和es6的find区别:
 * filter关注满足条件的所有值. 缺点: 会遍历所有元素,如果只需要查找数组中有没有某一元素,且该数组很大,会存在性能问题
 * find关注满足条件的第一个值. 缺点: 只要找到就不会继续向下查找了, 这一点也是find的优点.
 */
let arr = [1, 2, 3, 4, 5]
// let filter = arr.filter(function (item) {
//   return item % 2 === 0
// })
// console.log(filter) // [2,4]

let find = arr.find(function (item) {
  return item % 2 === 0
})
console.log(find) // 2,返回的是元素,而不是元素索引(如果找不到,会返回undefined)

// 2.Array.prototype.findIndex,查找元素的索引
let findIndex = arr.findIndex(function (item) {
  return item % 2 === 0
})
console.log(findIndex) // 1,返回的是元素索引
// findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。
