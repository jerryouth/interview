class Dep {
    constructor() {
        this.subs = []
    }
    // 向Subs数组中，添加订阅者的信息
    addSub(watcher) {
        this.subs.push(watcher)
    }

    // 发布订阅方法
    notify() {
        this.subs.forEach((watcher) => watcher.update())
    }
}

// 订阅者的类
class Watcher {
    constructor(cb) {
        // 回调函数
        this.cb = cb
    }
    // 出发回调的方法
    update() {
        this.cb()
    }
}

const w1 = new Watcher (() => {
    console.log('我是第一个订阅者');
})

const w2 = new Watcher (() => {
    console.log('我是第二个订阅者');
})

const dep = new Dep()
dep.addSub(w1)
dep.addSub(w2)

dep.notify()



// 只要我们为vue中data数据重新复制了，这个复制的动作，会被vue监听，
// 然后vue 要把数据的变化，通知到每个订阅者
// 接下来，订阅者（DOM元素）要根据最新的数据，更新自己的内容




const obj = {
    name: 'zs',
    age: 20,
    info: {
        a: 'a'
    }
}

Reflect.defineProperty(obj, 'name', {
    enumerable: true,
    configurable: true,
    get() {
        console.log('有人获取了obj.name 的值')
        return '我不是zs'
    },
    set(newVal) {
        console.log('我不要你的值', newVal);
        dep.notify()
    }
})