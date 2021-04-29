const s = 'aaa_aa_a'
const r1 = /a+/g
const r2 = /a+/y

console.log(r1.exec(s))
console.log(r2.exec(s))
// ["aaa", index: 0, input: "aaa_aa_a", groups: undefined]
// ["aaa", index: 0, input: "aaa_aa_a", groups: undefined]

console.log(r1.exec(s))
console.log(r2.exec(s))
// ["aa", index: 4, input: "aaa_aa_a", groups: undefined]
// null, 因为y表示粘连(sticky)修饰符

/*
  y修饰符的作用与g修饰符类似，也是全局匹配，后一次匹配都从上一次匹配成功的下一个位置开始。
  不同之处在于，g修饰符只要剩余位置中存在匹配就可，而y修饰符确保匹配必须从剩余的第一个位置开始，这也就是“粘连”的涵义。
*/
