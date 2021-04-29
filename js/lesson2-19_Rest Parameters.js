// es5/es6中怎么处理不确定参数的问题?
// es5
// function sum () {
//   var num = 0
//   Array.prototype.forEach.call(arguments, function (item) {
//     num += item * 1
//   })
//   return num
// }
// console.log(sum(1, 2, 3))
// console.log(sum(1, 2, 3, 4))

// es6
function sum (base, ...nums) {
  var num = 0
  nums.forEach(function (item) {
    num += item * 1
  })
  return base * 2 + num
}
console.log(sum(1, 2, 3, 4))

/*
  rest parameters 作用:
  1.获取函数被执行时所有参数
  2.nums是数组,而不是伪数组,所有数组api都能用
  3.参数可以拆分为确定参数和不确定参数,如上述实例的base, ...nums
*/

// spread operator(rest参数的逆运算)
/*
  Spread Operator 和 Rest Parameter 是形似但相反意义的操作符，
  简单的来说 Rest Parameter 是把不定的参数“收敛”到数组，
  而 Spread Operator 是把固定的数组内容“打散”到对应的参数。
*/
function sum2 (x = 1, y = 2, z = 3) {
  return x + y + z
}
let data = [4, 5, 6]
// console.log(sum2.apply(this, data))
console.log(sum2(...data)) // 15,等效于上一行语句

console.log(sum2(...[4])) // 9
console.log(sum2(...[4, 5])) // 12
console.log(sum2(...[4, 5, 6])) // 15

/*
  Rest Parameter 用来解决函数参数不确定的场景，
  Spread Operator 用来解决已知参数集合应用到固定参数的函数上，
  如果没有这个语法，可能需要这样做：
*/
console.log(sum2.apply(this, [4]))
console.log(sum2.apply(this, [4, 5]))
console.log(sum2.apply(this, [4, 5, 6]))
