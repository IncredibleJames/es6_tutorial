// es6如何拷贝对象?
const target = {}
const source = {
  'a': 1,
  'b': 2
}
Object.assign(target, source)
console.log(target) // {a: 1, b: 2}

// Object.assign有缺陷,是浅拷贝,如果target对象value值是引用类型,会数据丢失,需要用递归,然后再用assign处理
// 忽略`enumerable`为`false`的属性，只拷贝对象自身的可枚举的属性。

// 利用递归实现对象深拷贝

function _deepClone (source) {
  let target
  if (typeof source === 'object') {
    target = Array.isArray(source) ? [] : {}
    // 在看开源项目的过程中，经常会看到类似如下的源码。
    // for...in循环对象的所有枚举属性，然后再使用hasOwnProperty()方法来忽略继承属性。
    for (let key in source) {
      if (source.hasOwnProperty(key)) { // 判断对象是否包含特定的自身（非继承）属性
        if (typeof source[key] !== 'object') {
          target[key] = source[key]
        } else {
          target[key] = _deepClone(source[key])
        }
      }
    }
  } else {
    target = source
  }
  return target
}

// 使用js实现深拷贝
function deepClone (data) {
  let _data = JSON.stringify(data)
  return JSON.parse(_data)
}
