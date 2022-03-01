// 继承

// 原型继承

function Animal (color){
    this.color = ["black_white", "yellow"]

}
Animal.prototype.getColor = () => {
    console.log(this.color)
}

function Dogs(name) {
    this.name = name
}


Dogs.prototype = new Animal()

let dog1 = new Dog()
dog1.colors.push('brown')
let dog2 = new Dog()
console.log(dog2.colors)  // ['black', 'white', 'brown']


/* // 原型链继承存在的问题：

// 问题1：原型中包含的引用类型属性将被所有实例共享；
// 问题2：子类在实例化的时候不能给父类构造函数传参； */





// 构造函数继承


function Animal(name) {
    this.name = name
    this.getName = function() {
        return this.name
    }
}
function Dog(name) {
    Animal.call(this, name)
}
Dog.prototype =  new Animal()


/* 借用构造函数实现继承解决了原型链继承的 2 个问题：
引用类型共享问题以及传参问题。但是由于方法必须定义在构造函数中，
所以会导致每次创建子类实例都会创建一遍方法。
 */










// 组合继承

function Animal(name) {
    this.name = name
    this.colors = ['black', 'white']
}

Animal.prototype.getName = function() {
    return this.name
}

function Dog(name, age) {
    Animal.call(this, name)
    this.age = age
}


Dog.prototype = new Animal()
Dog.prototype.constructor = Dog

let dog1 = new Dog('奶昔', 2)
dog1.colors.push('brown')
let dog2 = new Dog('ha', 1)

console.log(dog2)


/* 组合继承已经相对完善了，但还是存在问题，
它的问题就是调用了 2 次父类构造函数，第一次是在 new Animal()，
第二次是在 Animal.call() 这里。 */




// 寄生组合继承

function Animal(name) {
    this.name = name
    this.colors = ['black', 'white']
}

Animal.prototype.getName = function() {
    return this.name
}

function Dog(name, age) {
    Animal.call(this, name)
    this.age = age
}


Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog

let dog1 = new Dog('奶昔', 2)
dog1.colors.push('brown')
let dog2 = new Dog('ha', 1)

console.log(dog2)

// Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__



// class 

class Animal {
    constructor(name) {
        this.name = name
    }
    getName() {
        return this.name
    }
}


class Dog extends Animal {
    constructor(name, age) {
        super(name)
        this.age = age
    }
}