undefined null [], {}, Number String Boolean
Object.keys(obj)

function deepcopy(obj) {
    if (obj instanceof RegExp) return new RegExp(obj)
    if (obj instanceof Date) return new Date(obj)
    if (obj === null || typeof obj !== 'object') return object
    let t = new obj.construtor()
    for (let key in obj) {
        if (obj.hasOwnProerty(key)) {
            t[key] = deepCopy(obj[key])
        }
    }
    return t
}

window.window === window // true

Map
Set 
WeakMap 
WeakSet

Object.assign({}, obj)
[].slice(0)


var a = 0;
var b = 0;
function A(a) {
  A = (b) => console.log(a + b++);
  console.log(a++);
}
A(1);
A(2);
console.log(a, b);

1
4
1,0


function test() {
  var a = {
    name: "zz",
    foo: () => console.log(this.name),
    bar() {
      console.log(this.name);
    },
  };
  a.foo();
  a.bar();
}
test.bind({ name: "test" })();

test

bind call apply

call、apply性能

for in
    for of
    forEach





    (function (a) {
        async function async1() {
          console.log("111", a);
          await async2();
          console.log("222", a);
        }
        async function async2() {
          console.log("333", a);
        }
        console.log("444", a);
        setTimeout(() => {
          console.log("555", a);
        }, 0);
        async1();
        var a = "A";
        new Promise((resolve) => {
          console.log("666", a);
          resolve();
        }).then(() => {
          console.log("777", a);
        });
        function a() {}
      })("B");
      444, "undefined"
      111, "undefined"
      666, "A"
      333, "A"
      777, "A"
      222, "A"
      555, "A"
      
      Vue父子生命周期
      
      computed watch
      
      $nextTick 
      
      vue 导航守卫
      
      vue 路由
      
      