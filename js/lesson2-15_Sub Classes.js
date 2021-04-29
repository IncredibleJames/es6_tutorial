// 如何继承一个类
// ------------es5---------------------
// let Animal = function (type) {
//   this.type = type
// }
// Animal.prototype.eat = function () {
//   Animal.walk()
//   console.log('I am eating food')
// }
// Animal.walk = function () {
//   console.log('I am walking')
// }
// let Dog = function () {
//   // Dog子类要继承Animal父类,首先要在Dog的构造函数中执行Animal类的构造函数
//   Animal.call(this, 'dog') // 初始化父类的构造函数,此时实现了一部分继承,将Animal构造函数中的属性实现了继承
//   this.run = function () {
//     console.log('I am running')
//   }
// }
// // 将Animal父类的原型链指向Dog的原型链
// Dog.prototype = Animal.prototype // 此时实现了完整的继承,将Animal类原型链上的方法也继承了
// let dog = new Dog('dog')
// dog.eat() // I am walking, I am eating food

// ------------es6---------------------
class Animal {
  constructor (type) {
    this.type = type
  }
  eat () {
    Animal.walk()
    console.log('I am eating food es6')
  }
  static walk () {
    console.log('I am walking')
  }
}
class Dog extends Animal { // extends类似于实现原型继承
  constructor (type) {
    // super的词法定义是伴随后面那对括号的,super除了在constructor里直接调用外还可以使用super.xxx(…)来调用父类上的某个原型方法，这同样是一种限定语法。
    super(type) // 类似于call的继承：在这里super相当于把Animal的constructor给执行了，并且让方法中的this是Dog的实例，super当中传递的实参都是在给Animal的constructor传递。
    this.age = 2 // 子类Dog构造器特有的属性
  }
}
let dog = new Dog('dog')
dog.eat()
