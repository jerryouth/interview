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

function deepCopy(obj) {
    if (obj instanceof RegExp) {return new RegExp(obj)}
    if (obj instanceof Date) {return new Date(obj)}
    if (obj === null || typeof obj !== 'object') return obj
    let t = new obj.constructor()
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            t[key] = deepCopy(obj)
        }
    }
    return t
}

const observeQueue = new Set()
const observe = fn => {obseravable.add(fn)}
const obseravable = (obj) => new Proxy(
    obj, {
        set(tgt, key, val, receiver) {
            const result = Object.set(tgt, key, val, receiver)
            observeQueue.forEach((v) => v())
            return result
        }
    }
)

const person = obseravable({age: 25, name: "Mike"})
print = () => console.log(`${person.name} is ${person.age} year old`)

observe(print)


targetNode.addEventListener('click', (e) => {
    if (e.targetNode.nodeName.toLowerCase === 'li') {
        alert(e.targetNode.i)
    }
})

class EventEmitter {
    constructor() {
        this._event = {}
    }
    on(name, cb) {
        const cbs = this._event[name] || []
        cbs.push(cb)
        this._event[name] = cbs
    }
    off(name, cb) {
        const cbs = this._event[name] || []
        const newcb = cbs.filter(fn => fn !== cb)
        this._event[name] = newcb
    }
    emit(name, once=false, ...args) {
        const tasks = this._event || []
        for (let fn of tasks) {
            fn(...args)
        }
        if (once) delete this._event[name]
    }
}

function flatten(arr) {
    while(arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr
}

function debounce(fn, delay) {
    let timer = null
    return function() {
        if (timer) clearTimeout(timer)
        timer = setTimeout(fn(), delay)
    }
}


function throttle(fn, delay) {
    let valid = true
    return function() {
        if (!valid) return false
        valid = false
        setTimeout(() => {
            fn()
            valid = true
        }
        , delay)
    }
}




