function loadScript (src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script')
    script.src = src
    script.onload = () => resolve(src)
    script.onerror = (err) => reject(err)
    document.head.append(script)
  })
}
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
loadScript('./1.js')
  .then(() => {
    return loadScript('./4.js')
  }, (err) => {
    console.log(err)
  })
  .then(() => {
    loadScript('./3.js')
  }, (err) => {
    console.log(err)
  })
