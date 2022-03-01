/* ES6 模块与 CommonJS 模块完全不同。它们有两个重大差异。

1、CommonJS 输出是值的拷贝，即原来模块中的值改变不会影响已经加载的该值，ES6静态分析，动态引用，输出的是值的引用，值改变，引用也改变，即原来模块中的值改变则该加载的值也改变。
CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
2、CommonJS 加载的是整个模块，即将所有的接口全部加载进来，ES6 可以单独加载其中的某个接口（方法），
CommonJS this 指向当前模块，ES6 this 指向undefined
CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。 */


// lib.js

var counter = 3;
function incCounter() {
    counter++
}

module.exports = {
    counter: counter,
    incCounter: incCounter
}
// main.js

var mod = require('./lib')

console.log(mod.counter)// 3
mod.incCounter()
consolel.log(mod.counter) //3


// lib.js

export let counter = 3
export function incCounter() {
    counter++
}

// main.js
import { counter, incCounter } from './lib'
console.log(counter); //3
incCounter()
console.log(counter)//4