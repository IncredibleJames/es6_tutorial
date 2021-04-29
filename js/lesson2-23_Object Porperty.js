// 1.属性的简洁表示法
let x = 1
let y = 2
let obj = {
  x: x,
  y: y
}
// 等价于下面的属性简写
let obj1 = {
  x,
  y
}

let user = {
  name: 'test'
}

let foo = {
  bar: 'baz'
}

console.log(user, foo)
// {name: "test"} {bar: "baz"}
console.log({ user, foo })
// {user: {name: "test"}, foo: {bar: "baz"}}

// 2.属性表达式
// 方法一
obj.foo = true
// 方法二
obj['a' + 'bc'] = 123
// 上面代码的方法一是直接用标识符作为属性名
// 方法二是用表达式作为属性名，这时要将表达式放在方括号之内
let x = 1
let y = 2
let z = 3
let obj3 = {
  x,
  y,
  // [z]: 6 // es6新增语法, 这里的[]中可以写任意的变量或者表达式
  [z + y]: 6
} // {5: 6, x: 1, y: 2}

let obj4 = {
  x,
  y,
  [z + y]: 6,
  * hello(){ //函數名前加*表示这是异步函数
    console.log('hello4')
  }
}
obj4.hello() // 不打印hello4,因为该函数未执行

//上述带*函数和如下函数等价,这是generator函数
// function* functionName(){

// }