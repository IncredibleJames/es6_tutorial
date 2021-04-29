function loadScript (src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script')
    script.src = src
    script.onload = () => resolve(src)
    script.onerror = (err) => reject(err)
    document.head.append(script)
  })
}
loadScript('./1.js')
  .then(() => {
    return loadScript('./4.js')
  })
  .then(() => {
    loadScript('./3.js')
  })
  .catch(err => {
    console.log(err)
  })

/**
   * catch捕获的是promise状态变为rejected时去捕获.
   * 作用:捕获链式操作上reject抛出的异常,避免每次在then方法中做异常处理
   * Tips:
   * 1.用reject触发错误,catch去捕获,不要用throw new Error方式
   * 2.Promise原型对象上的方法,不是Promise类的静态方法
  */
