// import name, { addr as addr2, list } from './lesson2-64_Import_Export_Mod'
// import say, { run } from './lesson2-64_Import_Export_Mod'
// import obj from './lesson2-64_Import_Export_Mod'
/**
 * 这里导入模块不可以用以下解构赋值的方式,因为导入模块本身是用花括号{},解构赋值也是用{},两者冲突,js引擎无法理解
 * import {response, desc} from './lesson2-64_Import_Export_Mod'
*/
// 需要在外面做解构赋值
// let { response, desc } = obj
// console.log(response, desc)

// 默认导出类
// import Test from './lesson2-64_Import_Export_Mod'
// 非默认导出类
// import { Test } from './lesson2-64_Import_Export_Mod'
// let test = new Test()
// console.log(test.id)

// 若模块中有多个类导出,无需全部写出来,可以将所有模块放到一个对象Mod中去:
import * as Mod from './lesson2-64_Import_Export_Mod'
let test = new Mod.Test()
let animal = new Mod.Animal()
let people = new Mod.default() // 默认类的导出,不能用new Mod.People,因为导出默认类时default会改写People
console.log(test.id, animal.name, people.name)// 4 'dog' 'zhangsan'
Mod.run()
