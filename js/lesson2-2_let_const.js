// 1.用let声明的全局变量,不能用window的属性来访问
var a = 3
let b = 4
console.log(window.a, window.b) // 3 undefined

// 2.用let声明的变量不允许重复定义
// let b = 5
// console.log(b) // Identifier 'b' has already been declared

// 3.let声明的变量是具有块级作用域的, 在块级作用域外无法访问
{
    let c = 6
    console.log(c)
}
console.log(c) // Uncaught ReferenceError: c is not defined

// 4.const除了let具有的上述特性外, 还有一点就是用const声明的常量不允许修改
const d = 7
d = 8
console.log(d) // Uncaught TypeError: Assignment to constant variable

// 5.const不允许先声明再赋值, 声明的变量必须进行初始化
const e
e = 9
console.log(e) // Uncaught SyntaxError: Missing initializer in const declaration

// 小练习1
console.log(x)
let x = 1 // Uncaught ReferenceError: x is not defined (Tip: let不会变量声明提升)

// 小练习2
for(var i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i)
    }, 1000)
}
//3 3 3,若将var声明换成let,则会打印0 1 2
/**
 * 答案解析:
 * 都是3,是异步 + 全局作用域两者一起造成的，setTimeout是异步代码，js会先执行同步代码，也就是for循环，setTimeout放在异步队列中，三次for循环执行完毕之后，异步队列中三个setTimeout就开始执行，开始打印i，此时i已经是3，所以会打印3次3。 就算你将setTimeout的1000改为0，还是执行三次3。 

 * 如果是let定义i，那么每次执行大括号时候，作用域是固定的，setTimeout被放入异步队列中的时候传递进去的i是这个块级作用域的i,所以值会被保护起来，三次for执行之后，开始执行异步队列的三个setTimeout, 每个setTimeout里面保存的i都是对应作用域里的i，所以会打印0, 1, 2
 */


// 另需关注变量声明提升的知识点
// 1.用let声明的变量不会进行变量提升, 2.函数表达式不会提升, 3.函数声明提升优先于变量声明提示