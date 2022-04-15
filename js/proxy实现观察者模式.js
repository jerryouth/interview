// proxy 使用功能

const interceptor = new Proxy({}, {
    set(tgt, key, val, receiver) {

    }
})




const observerQueue = new Set()

// 观察者队列
const observe = (fn) => observerQueue.add(fn)



const observable = (obj) => 
    new Proxy(obj, {
        set(tgt, key, val, receiver) {
            const result = Reflect.set(tgt, key, val, receiver)
            // 观察者队列触发
            observerQueue.forEach((v) => v())
            return result
        }
    })

const person = observable({ age: 25, name: "Mike"})
const print = () => console.log(`${person.name} is ${person.age} years old`)

observe(print)





const observerQueue = new Set()

const observe = (fn) => observerQueue.add(fn)


const observable = (obj) => 
    new Proxy(obj, {
        set(tgt, key, val, receiver) {
            const result = Reflect.set(tgt, key, val, receiver)
            observerQueue.forEach((v) => v())
            return result
        }
    })


