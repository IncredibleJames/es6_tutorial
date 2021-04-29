// var abc = 1234 // 全局变量
// abcd = 2345 // 作为全局变量window的属性使用,注意两者区别
// delete abc会返回false,而delete abcd会返回true,效果等同于delete window.abcd,因为delete abcd找不到时会到全局对象window属性上去找
window.a = 3
function test () {
  console.log(this.a) // 这里的this是动态指向,是动态作用域
}
test.bind({ a: 2 })() // 2,这里bind把作用域的范围进行了修改指向了{a: 2},而this指向的是当前作用域对象,故打印出2
test() // 3
