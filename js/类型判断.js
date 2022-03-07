
// 类型判断
function typeOf (obj){
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}

// ES5去重
function unique(arr) {
    return arr.filter((item, index, array) => array.indexOf(item) === index)
}
// ES6去重

var unique = arr => [...new Set(arr)]

// 数组扁平化
function flatten(arr) {
    var result = []
    for (var i = 0, len = arr.length; i < len; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]))
        } else {
            result.push(arr[i])
        }
    }
    return result
}

// ES6 扁平化
function flatten(arr) {
    while(arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr
}



