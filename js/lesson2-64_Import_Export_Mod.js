// export const name = 'hello'
// export let addr = 'beijing'
// export var list = [1, 2, 3]

// 或者这样先声明再导出
// const name = 'hello2'
// let addr = 'beijing2'
// var list = [1, 2, 4]
// export {
//   name,
//   addr,
//   list
// }

// const name = 'hello3'
// let addr = 'beijing3'
// var list = [1, 2, 5]
/**
 * 导出默认变量name,一个模块(js文件)只能默认导出一个变量/方法等.
 * import这个模块时,这个默认变量可以不用{}包裹,直接import,并且不是非要叫name,如import name2 from './lesson2-64_Import_Export_Mod.js'
*/
// export default name
// export {
//   addr,
//   list
// }

// 导出函数
// export default function say (content) {
//   console.log(content)
// }
// export function run () {
//   say('hello es6')
// }

// 导出对象
// const response = {
//   code: 0,
//   message: 'success'
// }

// const desc = {
//   age: '20',
//   name: 'jack'
// }
/**
 * 注意导出对象不可以用以下方式,因为导出模块是用花括号{},对象本身也是花括号,js引擎无法理解{}中导出模块是变量/函数还是对象的key-value
 * export{
 *   code: 0,
 *   message: 'success'
 * } //错误示范
*/

// 导出对象正确操作方式
// export default {
//   response,
//   desc
// }

// 导出类
// class Test {
//   constructor () {
//     this.id = 5
//   }
// }
// 导出默认类写法
// export default Test

// 普通导出类
export class Test {
  constructor () {
    this.id = 4
  }
}

export class Animal {
  constructor () {
    this.name = 'dog'
  }
}

export default class People {
  constructor () {
    this.name = 'zhangsan'
  }
}

// 被导出的模块能否在本模块引用?
export function say () {
  console.log('test using inner module')
}

export function run () {
  say()
}
