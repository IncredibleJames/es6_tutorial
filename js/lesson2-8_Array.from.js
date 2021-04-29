// es5中如何将伪数组转换为数组?
// DOM结构中的NodeList以及arguments对象都是伪数组
// 伪数组: 具备数组的一些特性,有length属性,都可以遍历,但是没有数组自身的一些api,比如slice方法等
// arguments必须在函数体内使用,且现在es6以及废弃了arguments的使用
// const Price = {
//   A: [1.5, 2.3, 4.5],
//   B: [3, 4, 5],
//   C: [0.5, 0.8, 1.2]
// }
// es5中转换方法
// let args = [].slice.call(arguments) // collection
// let imgs = [].slice.call(document.querySelectorAll('img')) // NodeList
// console.log(args)

// es6中转换方法
// Array.prototype.from, es6在数组原型对象上新增了from方法
/**
  Array.from(arrayLike[, mapFn[, thisArg]])
    arrayLike：被转换的对象,该对象只有2种:
      1.部署了Iterator接口的对象，比如：Set，Map，Array。
      2.类数组对象，就是一个对象必须有length属性，没有length，转出来的就是空数组。
    mapFn：map函数;
    thisArg：map函数中this指向的对象。
 */
// let args=Array.from(arguments)
// let imgs=Array.from(document.querySelectorAll('img'))

// ----------------------------demo----------------------------------------

// es5初始化一个长度为5,值都为1的数组方法
// let array = Array(5)
// for (let i = 0, len = array.length; i < len; i++) {
//   array[i] = 1
// }
// console.log(array)

// forEach错误初始化案例
// array.forEach(function (item, index) {
//     array[index] = 1
// })
// console.log(array) // [], 因为forEach不能对空数组进行操作,无效

/**
 * 伪数组概念,该对象必须用有以下2个特性
    1.按照索引方式存储数据
    2.具备length属性
    e.g.
    {0:'a',1:'b',length:2}
 */
// es6方法初始化空数组Array.from
// let array = Array.from({ length: 5 }, function () { return 1 })
// console.log(array)
// 上述案例中的伪数组{ length: 5 }, 只是个索引为空的伪数组

/**
 * Array.from 第三个参数，map函数中this指向的对象
该参数是非常有用的，我们可以将被处理的数据和处理对象分离，将各种不同的处理数据的方法封装到不同的的对象中去，处理方法采用相同的名字。
在调用Array.from对数据对象进行转换时，可以将不同的处理对象按实际情况进行注入，以得到不同的结果，适合解耦。
这种做法是模板设计模式的应用，有点类似于依赖注入。
*/
let diObj = {
  handle: function (n) {
    return n + 2
  }
}

console.log(Array.from(
  [1, 2, 3, 4, 5],
  function (x) {
    return this.handle(x)
  },
  diObj))
