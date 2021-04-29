// 如何声明一个类?

// ES5中用函数来模拟类, 类要有构造函数, 构造函数需要传参数和实例化
// ES5类写法的规范: 每个实例特有的东西放到构造函数中,而公共的方法等放到原型链上
// let Animal = function (type) {
//   this.type = type
// }
// Animal.prototype.eat = function () {
//   console.log('I am eating food')
// }
// 将父类的公共方法通过原型链的方式挂载,这样每个子类实例都不会很大,修改父类公共方法会自动修改子类继承的方法

// let dog = new Animal('dog')
// let cat = new Animal('cat')

// 如何通过实例修改原型链上的公共方法?
// dog.constructor.prototype.eat = function () { // dog.constructor指向构造函数Animal
//   console.log('eat modified')
// }
// console.log(dog)
// console.log(cat)

// dog.eat()
// cat.eat()
// -------------------------ES6中类的定义---------------------------
// class Animal {
//   constructor (type) { // 构造函数里面写属性,外面写方法
//     this.type = type
//   }
//   eat () {
//     console.log('I am eating food es6')
//   }
// }
// let dog = new Animal('dog')
// let cat = new Animal('cat')
// console.log(dog)
// console.log(cat)
// dog.eat()
// cat.eat()

// 如何判断上述es5和es6声明的类有什么区别?
// console.log(typeof Animal) // 输出function,没有区别,可以看chrome控制台的dog实例,es6声明类也是在原型链上挂载了eat方法和constructor,只是更简便了,是语法糖

// --------------2.13 Setter和Getter-----------------
let _age = 4
class Animal {
  constructor (type) { // 构造函数里面写属性,外面写方法
    this.type = type
  }
  // getter方法定义
  get age () { // age只是暴露给实例对象操作的出入口,并不是真正存放的地方(_age),这样就是实现了私有属性(_age)保护,这也是setter和getter的价值所在
    return _age
  }
  // setter方法定义
  set age (val) {
    if (val < 7 && val > 4) {
      _age = val // 可设置满足一定条件才可改变
    }
  }
  eat () {
    console.log('I am eating food es6')
  }
}
let dog = new Animal('dog')
dog.age = 6
console.log(dog.age) // 6

// ------------es5中如何读写属性的?----------------
// 通过this.xxx来读写属性, es5中无法做到拦截, 无法有条件地读和写
// 而es6的setter和getter在属性读写方面能有更大的操作权限,能个性化定制
