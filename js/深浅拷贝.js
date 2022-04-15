const dc = function(obj) {
    if (obj instanceof RegExp) return new RegExp(obj)
    if (obj instanceof Date) return new Date(obj)
    if (obj === null || typeof obj !== 'object') return obj
    let t = new obj.constructor()
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            t[key] = dc(obj[key])
        }
    }
    return t
}

// 浅拷贝
function shallowCopy(obj) {
    var copy = {}
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = obj[key]
        }
    }
    return copy
}

Object.assign({})

const dc = function(obj) {
    if (obj instanceof RegExp) return new RegExp(obj)
    if (obj instanceof Date) return new Date(obj)
    if (obj === null || typeof obj !== 'object') return obj
    let t = new obj.constructor()
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            t[key] = dc(obj[key])
        }
    }
    return t
}


function shallowCopy(obj) {
    let copy = {}
    for (key in obj)
}
