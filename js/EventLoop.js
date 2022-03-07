/* 
JavaScript将任务分为同步任务和异步任务，同步任务进入主线中中，异步任务首先到Event Table进行回调函数注册。
当异步任务的触发条件满足，将回调函数从Event Table压入Event Queue中。
主线程里面的同步任务执行完毕，系统会去Event Queue中读取异步的回调函数。
只要主线程空了，就会去Event Queue读取回调函数，这个过程被称为Event Loop。


 */


// js异步任务的优先级


// 宏任务：
// script 

// 定时器

// AJAX

// history trarversal  (h5 当中的历史操作)

// I/O 


// 微任务

// Promise.then 

// process.nextTick （nodejs 中的异步操作)

// MutationObserver

// Object.observe

/* 代码开始执行，创建一个全局调用栈，script作为宏任务执行
执行过程过同步任务立即执行，异步任务根据异步任务类型分别注册到微任务队列和宏任务队列
同步任务执行完毕，查看微任务队列

若存在微任务，将微任务队列全部执行(包括执行微任务过程中产生的新微任务)
若无微任务，查看宏任务队列，执行第一个宏任务，宏任务执行完毕，查看微任务队列，重复上述操作，直至宏任务队列为空
 */

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success");
      console.log("timer1");
    }, 1000);
    console.log("promise1里的内容");
  });
  const promise2 = promise1.then(() => {
    throw new Error("error!!!");
  });
  console.log("promise1", promise1);
  console.log("promise2", promise2);
  setTimeout(() => {
    console.log("timer2");
    console.log("promise1", promise1);
    console.log("promise2", promise2);
  }, 2000);
  
//   'promise1里的内容'
//   'promise1' Promise{<pending>}
//   'promise2' Promise{<pending>}
//   'timer1'
//   test5.html:102 Uncaught (in promise) Error: error!!! at test.html:102
//   'timer2'
//   'promise1' Promise{<resolved>: "success"}
//   'promise2' Promise{<rejected>: Error: error!!!}
















