

class EventEmitter {
    constructor() {
        this.cache = {}
    }
    on(name, fn) {
        if (this.cache[name]) {
            this.cache[name].push(fn)
        } else {
            this.cache[name] = [fn]
        }
    }
    off(name, fn) {
        let tasks = this.cache[name]
        if (tasks) {
            const index = tasks.findIndex(f => f === fn || f.callback === fn)
            if (index >= 0) {
                tasks.splice(index, 1)
            }
        }
    }
    emit(name, once = false, ...args) {
        if (this.cache[name]) {
            // 创建副本，如果回调函数内继续注册相同事件，会造成死循环
            let tasks = this.cache[name].slice()
            for (let fn of tasks) {
                fn(...args)
            }
            if (once) delete this.cache[name]
        }
    }
}

class EventEmitter {
    constructor() {
        this._event = {
        }
    }
    on(name, fn) {
        const callbacks = this._event[name] || []
        callbacks.push(fn)
        this._event[name] = callbacks
    }
    emit(name,once=false, ...args) {
        let tasks = this._event[name].slice()
        for (let fn of tasks) {
            fn(...args)
        }
        if (once) delete this._event[name]
    }
    off(name, callback) {
        const callbacks = this._event[name] || []
        const newCallbacks = callback.filter(fn => fn != callback)
        this._events[name] = newCallbacks
    }
}


// class Emitter {
//     // 用来存放注册的时间与回调
//     constructor() {
//         this._event = {}
//     }
//     on(eventName ,cb) {
//         if (this._events[eventName]) {
//             if (this.eventName !== "newListener") {
//                 this.emit("newListener", eventName)
//             }
//         }
//         const callbacks = this._event[eventName] || []
//         callbacks.push(cb)
//         this._event[eventName] = callbacks
//     }
//     emit(eventName, ...args) {
//         const callbacks = this._events[eventName] || []
//         callbacks.forEach(cb => cb(...args))
//     }
//     off(eventName, callback) {
//         const callbacks = this._event[eventName] || []
//         const newCallbacks = callbacks.filter(fn => fn != callback && fn.initialCallback != callback)
//         this._events[eventName] = newCallbacks
//     }
//     once(eventName, callback) {
//         const one = (...args) => {
//             callback(...args)
//             this.off(eventName, one)
//             one.initialCallback = callback
//             this.on(eventName, one)
//         }
//     }
// }