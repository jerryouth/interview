/* 微软提出了名为事件冒泡(event bubbling)的事件流。
事件冒泡可以形象地比喻为把一颗石头投入水中，泡泡会一直从水底冒出水面。
也就是说，事件会从最内层的元素开始发生，一直向上传播，直到document对象。 */


<div id="outer">
    <p id="inner">Click me!</p>
</div>

// 事件冒泡
// p -> div -> body -> html -> document


// 事件捕获
// document -> html -> body -> div -> p


{/* <ul id="list">
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
  ......
  <li>item n</li>
</ul> */}


element.addEventListener(event, function, useCapture)
// usecapture
// 可能值:
// true - 事件句柄在捕获阶段执行（即在事件捕获阶段调用处理函数）
// false- false- 默认。事件句柄在冒泡阶段执行（即表示在事件冒泡的阶段调用事件处理函数）


// 给父层元素绑定事件
document.getElementById('list').addEventListener('click', function (e) {
    // 兼容性处理
    var event = e || window.event;
    var target = event.target || event.srcElement;
    // 判断是否匹配目标元素
    if (target.nodeName.toLocaleLowerCase === 'li') {
      console.log('the content is: ', target.innerHTML);
    }
  });

  div.addEventListener('click', callback, true)


//   window.addEventListener('load', doSomething, false)


// 组织事件冒泡

$("#div1").mousedown(function(e){
    var e=event||window.event;
    event.stopPropagation();
});

$("#div1").mousedown(function(event){
    var e=e||window.event;
    return false;
});

// 但是这两种方式是有区别的。return false 不仅阻止了事件往上冒泡，而且阻止了事件本身(默认事件)。
// event.stopPropagation()则只阻止事件往上冒泡，不阻止事件本身