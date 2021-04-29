// 箭头函数
let sum = (x, y, z) => x + y + z // 返回值是一行表达式可以省略return和{},如果没有返回值就算只有一行语句也不可省略函数体的{}
let obj = (x, y, z) => ({ // 返回值是对象,需要在外层加()充当运算表达式的作用,可省去return
  x: x,
  y: y,
  z: z
}) // 这里的{}是对象的{},而不是函数体的{}

let hello = (name) => {
  console.log('say hello', name)
}
// 或者
let hello2 = name => { // 只有一个参数,可以省略(),大于一个参数,不可省略()
  console.log('say hello', name)
}

// 在es5中当不清楚this指向时,只要看函数是被谁调用的,this就指向谁
let test = {
  name: 'test',
  say: function () {
    console.log(this.name)
  }
}
test.say() // test调用的say,say函数中this就指向test,所以this.name就是test.name,即'test'

// es6中箭头函数对this指向是定义时,而不是函数执行时this指向哪里
let test2 = {
  name: 'test2',
  say: () => {
    console.log(this.name, this)
  }
}
test2.say() // undefined, {}, 因为webpack在打包时将代码作为字符串放到了eval()函数中,eval函数是指向空对象的.
// 如果放到浏览器中,结果是 undefined, window,因为函数的执行环境是浏览器,this指向window,window上又没有name属性,所以结果为undefined

/*
  练习:
  1.如何使用箭头函数实现数组排序
  2.箭头函数对this的处理还有什么妙用
*/

let arr = [3, 53, 2, 12, 80]
let result = arr.sort((a, b) => a - b)
console.log(result)
