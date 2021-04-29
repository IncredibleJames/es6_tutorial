// 生成新数组
// Array.prototype.of
/**
 * Array.of(element0[, element1[, …[, elementN]]])
 * 创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。
 * of的参数就是表示转换后数组的元素。
 */
let arr = Array.of(1, 2, 3, 4, 5)
console.log(arr) // [1, 2, 3, 4, 5]

/**
 *Array.fill(value[, start[, end]]),使用制定的元素填充数组，其实就是用默认内容初始化数组。
    value：填充值。
    start：填充起始位置，可以省略。
    end：填充结束位置，可以省略，实际结束位置是end-1，即不包括end索引的元素。
*/
// 1.采用一默认值填初始化数组。
let arr2 = Array(5).fill(7)
console.log(arr2) // [7,7,7,7,7]

// 2.制定开始和结束位置填充, 实际填充结束位置是前一位。
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
arr3.fill(7, 2, 5)
console.log(arr3) // [1,2,7,7,7,6,7,8,9,10,11]

// 3.结束位置省略,从起始位置到最后。
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
arr4.fill(7, 2)
console.log(arr4) // [1,2,7,7,7,7,7,7,7,7,7]
