/* new 产生一个新对象
新对象需要能够访问到构造函数的属性， 所以需要重新制定它的原型
否早函数可能会显示返回
 */



function objectFactory() {
    var obj = new Object()
    let Constructor = [].shift.call(arguments)
    obj.__proto__ = Constructor.prototype
    var ret = Constructor.apply(obj, arguments)

    // ret || obj 这里这么写考虑了构造函数显示返回 null 的情况
    return typeof ret === 'object' ? ret || obj : obj
}

// 创建一个新对象，将新对象的原型指向构造函数的原型
// 用apply 将构造函数在新对象上执行，返回新的对象






function objectFactory() {
    let obj = new Object()
    let Constructor = [].shift.call(arguments)
    obj.__proto__ = Constructor.prototype
    let ret = Constructor.apply(obj, arguments)
    return ret
}



function objectFactory() {
    let obj = new Object()
    let Constructor = [].shift.call(arguments)
    obj.__proto__ = Constructor.prototype
    let ret = Constructor.apply(obj, arguments)
    return ret
}

function objectFactory() {
    let object = new Object
    let constructor = [].shift.call(arguments)
    obj.__proto__ = Constructor.prototype
    let ret = Constructor.apply(obj, arguments)
    return ret
}




