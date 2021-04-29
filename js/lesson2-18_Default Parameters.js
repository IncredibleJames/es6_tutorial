// 函数参数的默认值
// es5方法
// function fn (x, y, z) {
//   if (y === undefined) {
//     y = 7
//   }
//   if (z === undefined) {
//     z = 42
//   }
//   return x + y + z
// }

// es6方法
function f (x, y = 7, z = x + y) {
  console.log(f.length) // 1, f.length只能获取函数没有参数默认值的参数个数,只有一个形参x没有默认值, 所以不要用f.length来获取函数执行时参数的个数
  return x * 10 + z
}
console.log(f(1, undefined)) // 18, y参数未定义,会使用默认值7

// 判断函数有几个参数,es6中不再使用arguments.length, 而是借助Function.length,即函数名.length来判断
// Function.length统计函数第一个默认参数前的参数个数
// e.g.
function f1 (x = 2, y = 7, z = x + y) {
  console.log(f1.length) // 0, 函数所有参数都有默认值,所以f1.length=0
  return x * 10 + z
}
console.log(f1(1, undefined)) // 18
