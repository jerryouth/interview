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



// 寄生组合继承



