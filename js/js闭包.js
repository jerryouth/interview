//  全局执行上下文
// 函数执行上下文
// eval 执行上下文

// 创建
创建词法环境
// 生成变量对象（VO) 建立作用域链
// 确认this指向， 绑定this
// 执行


/* 预编译发生在函数执行之前。预编译四部曲为：

创建AO对象
找形参和变量声明，将变量和形参作为AO属性名，值为undefined
将实参和形参相统一
在函数体里找到函数声明，值赋予函数体。最后程序输出变量值的时候，就是从AO对象中拿。 */

// 一个函数和对其周围状态（lexical environment，
// 词法环境）的引用捆绑在一起（或者说函数被引用包围），
// 这样的组合就是闭包（closure）。
// 也就是说，闭包让你可以在一个内层函数中访问到其外层函数的作用域。
// 在 JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来。


function limitQueue(url, limit) {
    let i = 0;
    for (let excuteCount = 0; excuteCount < limit; excuteCount++) {
        run()
    }
    function run() {
        new Promise((res, rej) => {
            const url = urls[i]
            i++
            res(fn(url))
        }).then(() => {
            if (i < url.length) run()
        })
    }
}
