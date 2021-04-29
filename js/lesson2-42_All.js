const p = Promise.resolve(1)
const p2 = Promise.resolve(2)
const p3 = Promise.resolve(3)

Promise.all([p, p2, p3]).then(values => {
  console.log(values)
})

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
/**
 *Promise.all() 方法接收一个promise的iterable类型（注：Array，Map，Set都属于ES6的iterable类型）的输入，
 *并且只返回一个Promise实例， 那个输入的所有promise的resolve回调的结果是一个数组。
 *Promise.all 当且仅当传入的可迭代对象为空时为同步
*/
