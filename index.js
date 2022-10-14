const arr = []

console.time('Array')
console.log(Array.isArray(arr))
console.timeEnd('Array')

console.time('proto')
console.log(Object.prototype.toString.call(arr))
console.timeEnd('proto')

console.time('construcotr')

console.log(arr.constructor === Array)
console.timeEnd('construcotr')