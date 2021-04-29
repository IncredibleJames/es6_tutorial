function loadScript (src) {
  // pending, undefined
  return new Promise((resolve, reject) => {
    let script = document.createElement('script')
    script.src = src
    script.onload = () => resolve(src) // fulfilled, result
    script.onerror = (err) => reject(err) // rejected, error
    document.head.append(script)
  })
}
loadScript('./1.js')
  .then(loadScript('./2.js'))
  .then(loadScript('./3.js'))

/**
 * 1.loadScript函数中返回Promise对象,没有调用.then时执行的什么
 * 2.Promise状态怎么被改变的
 * 3.Promise随着状态改变,是怎么传递数据的
 *
 * key1
 * .then是Promise原型对象上的方法: Promise.prototype.then()
 * promise.then(onFulfilled[, onRejected])
 * 若then中onFulfilled[, onRejected]是非函数或者遗漏,会忽略这2部分,
 * then函数执行时,会将参数loadScript('./2.js')作为表达式,去计算表达式的值,就要被执行,从而填坑了
 *
 * Q: 为何.then方法可以链式调用?
 * .then返回了正常的Promise实例
 * 当then中传的不是函数,即不是传的onFulfilled[, onRejected]时,会返回空的Promise对象,就会认为是resolved
 * 这样能保证只要调用.then方法就一定能返回Promise对象,所以可以用.then方法链式调用
 *
 * onFulfilled[, onRejected]分别对应Promise对象resolve, reject两个方法, 这两个方法返回不同的状态
*/
