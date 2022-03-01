/* Promise的状态一经改变就不能再改变。(见3.1)
.then和.catch都会返回一个新的Promise。(上面的👆1.4证明了)
catch不管被连接到哪里，都能捕获上层未捕捉过的错误。(见3.2)
在Promise中，返回任意一个非 promise 的值都会被包裹成 promise 对象，例如return 2会ma被包装为return Promise.resolve(2)。
Promise 的 .then 或者 .catch 可以被调用多次, 但如果Promise内部的状态一经改变，并且有了一个值，那么后续每次调用.then或者.catch的时候都会直接拿到该值。(见3.5)
.then 或者 .catch 中 return 一个 error 对象并不会抛出错误，所以不会被后续的 .catch 捕获。(见3.6)
.then 或 .catch 返回的值不能是 promise 本身，否则会造成死循环。(见3.7)
.then 或者 .catch 的参数期望是函数，传入非函数则会发生值透传。(见3.8)
.then方法是能接收两个参数的，第一个是处理成功的函数，第二个是处理失败的函数，再某些时候你可以认为catch是.then第二个参数的简便写法。(见3.9)
.finally方法也是返回一个Promise，他在Promise结束的时候，无论结果为resolved还是rejected，都会执行里面的回调函数。 */