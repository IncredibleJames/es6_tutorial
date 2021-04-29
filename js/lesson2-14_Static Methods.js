// es5和es6中分别是如何操作一个方法的
// 方法分为: 1.对象实例的方法 2.类的静态方法

// ------------es5---------------------
// let Animal = function (type) {
//   this.type = type
// }
// Animal.prototype.eat = function () {
//   Animal.walk() // 如果换成this.walk()会报Uncaught TypeError: this.walk is not a function
//   console.log('I am eating food')
// }
// Animal.walk = function () {
//   console.log('I am walking')
// }
// let dog = new Animal('dog')
// dog.eat()
// dog.walk() // Uncaught TypeError: dog.walk is not a function, 因为静态方法在实例对象上是找不到的

// ------------es6---------------------
class Animal {
  constructor (type) { // 构造函数里面写属性,外面写方法
    this.type = type
  }
  eat () {
    Animal.walk()
    console.log('I am eating food es6')
  }
  static walk () { // static标识表示这是类的静态方法, 需要用类名去调用
    console.log('I am walking')
  }
}
let dog = new Animal('dog')
dog.eat()

// 总结: 在实际业务开发中,何时使用实例对象的方法?何时使用类的静态方法?需要特别注意
// 如果这个方法不涉及实例对象的内容,就要用类的静态方法(类的静态方法拿不到当前的实例对象)(如walk方法)
// 如果这个方法依赖于实例对象的某些属性或方法,则要用实例对象的方法. (如eat方法)
// 具体选用那个方法,要根据实际的业务场景,代码设计,两者本身没有优缺点,只有是否适用.
