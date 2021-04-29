// 异步操作
// Tip: srcipt标签的加载本身就是异步操作
// demo 1
/* function loadScript (src, callback) {
  let script = document.createElement('script')
  script.src = src
  script.onload = () => { callback() }
  document.head.append(script)
}

function test () { // 同步
  console.log('test')
}
loadScript('./1.js', test) // 1 'test'
 */

function loadScript (src, callback) {
  let script = document.createElement('script')
  script.src = src
  script.onload = () => { callback(src) }
  document.head.append(script)
}

// 回调地狱
loadScript('./1.js', function (script) {
  loadScript('./2.js', function (script) {
    loadScript('./3.js', function (script) {

    })
  })
})
