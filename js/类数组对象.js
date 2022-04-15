// 所谓类数组对象，就是指可以通过索引属性访问元素并且拥有 length 属性的对象。
var arrLike = {
    0: 'name',
    1: 'age',
    2: 'job',
    length: 3
  }


Array.from()