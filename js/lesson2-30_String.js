const a = 20
const b = 10
const c = 'javascript'
const str = `my age is ${a + b}, i love ${c}`
console.log(str)

// es6 string模板字符串还可以解决换行问题,能识别模板字符串中的换行符
let str2 = `我是第一行

我是第二行`
console.log(str2)

/**
 * Tag literals
 */

// strings表示在字符串模板中,被所有变量所分隔开的字符串集合,这里strings只有['您此次的']
// strings 参数指的是 Tag 函数后面被变量分割开的字符串集合，type 参数是对应第一个变量，Tag 函数可以有多个 type 类似的参数
// 这里不能按照常规的字符串来理解，strings[0]中0就指向第一个字符，这里的0指的是分割好的数组，所以0指向 您此次的，这里的分割是按 ${} 处理的
function Price (strings, type) {
  let s1 = strings[0]
  let wholeSalePrice = 16
  let retailPrice = 20
  let showTxt
  if (type === 'retail') {
    showTxt = `购买的零售价是: ${retailPrice}`
  } else {
    showTxt = `购买的批发价是: ${wholeSalePrice}`
  }

  return `${s1}${showTxt}`
}
let showText = Price`您此次的${'retail'}`
console.log(showText)

// es5中字符串换行,包含变量或表达式,包含逻辑运算怎么办?

// 练习: 用Tag函数解决下你业务中的字符串模板的问题
