// 同源策略  Cross-origin resource sharing

// protocol（协议）、domain（域名）、port（端口）三者一致。」

// http://www.example.com:80/a.js
// http://www.example.com:80/b.js
// 以下这种看上去再相似也没有用，都不是同源。
// http://www.example.com:8080
// http://www2.example.com:80

// 在这里注意一下啊，这里是为了突出端口的区别才写上端口。在默认情况下 http 可以省略端口 80， https 省略 443。这别到时候闹笑话了，你和我说 http://www.example.com:80 和 http://www.example.com 不是同源，他俩是一个东西。
// http://www.example.com:80 === http://www.example.com
// https://www.example.com:443 === https://www.example.com


// CORS 跨域
// 简单请求 复杂请求 
/* 不会触发 CORS 预检请求。这样的请求为“简单请求”，请注意，该术语并不属于 Fetch （其中定义了 CORS）规范。若请求满足所有下述条件，则该请求可视为“简单请求”：
情况一: 使用以下方法(意思就是以下请求以外的都是非简单请求) */

// GET
// HEAD
// POST


// JSONP优点是简单兼容性好

// GET /cors HTTP/1.1
// Origin: http://wang.com
// Host: api.ergou.com
// Accept-Language: en-US
// Connection: keep-alive
// User-Agent: Mozilla/5.0
// ...


// Access-Control-Allow-Origin: http://api.ergou.com
// Access-Control-Allow-Credentials: true
// Access-Control-Expose-Headers: FooBar
// Content-Type: text/html; charset=utf-8


// .学会`withCredentials`属性；
// 2.学会`axios`配置`withCredentials`；
// 3.学会设置`Access-Control-Allow-Origin`属性；
// 4.学会设置`Access-Control-Allow-Credentials`属性；
// 5.学会解决跨域请求携带源站cookie的问题；


const express = require("express");
const app = express();

// `index.html` 加载时会请求login接口
// 设置`cookie`
app.get("/login", (req, res) => {
  res.cookie("user", "jay", { maxAge: 2000000, httpOnly: true });
  res.json({ code: 0, message: "登录成功" });
});

// 此接口是检测`cookie`是否设置成功，如果设置成功的话，浏览器会自动携带上`cookie`
app.get("/user", (req, res) => {
  // req.headers.cookie: user=jay
  const user = req.headers.cookie.split("=")[1];
  res.json({ code: 0, user });
});

// 托管`index.html`页面
// 这样的话在`index.html`中发起的请求，默认的源就是`http://localhost:8000`
// 然后再去请求`http://localhost:8003`就会出现跨域了
app.use("/static", express.static("public"));

app.listen("8000", () => {
  console.log("app1 running at port 8000");
});







axios.get("http://localhost:8000/login", {}).then((res) => {
        console.log(res);
      });
      // 发送同域请求
      button.onclick = function () {
        axios.get("http://localhost:8000/user", {}).then((res) => {
          console.log(res);
        });
      };
      // 发送跨域请求
      crossButton.onclick = function () {
        axios({
          method: "get",
          url: "http://localhost:8003/anotherService",
        }).then((res) => {
          console.log(res);
        });
      };

      const express = require("express");
const app = express();




// ************8003 端口代码
// 定义一个接口，index.html页面请求这个接口就是跨域（因为端口不同）
app.get("/anotherService", (req, res) => {
  res.json({ code: 0, msg: "这是8003端口返回的" });
});

app.listen("8003", () => {
  console.log("app2 running at port 8003");
});





// 修改跨域请求的代码
crossButton.onclick = function () {
    axios({
      withCredentials: true, // ++ 新增
      method: "get",
      url: "http://localhost:8003/anotherService",
    }).then((res) => {
      console.log(res);
    });
};


// 增加获取cookie
app.all("*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:8000");
    res.header("Access-Control-Allow-Credentials", "true"); // ++ 新增
    next();
  });


//   复杂请求

// 允许哪个方法访问我
res.setHeader('Access-Control-Allow-Methods', 'PUT')
// 预检的存活时间
res.setHeader('Access-Control-Max-Age', 6)
// OPTIONS请求不做任何处理
if (req.method === 'OPTIONS') {
  res.end() 
}

// 定义后台返回的内容
app.put('/getData', function(req, res) {
  console.log(req.headers)
  res.end('我不爱你')
})


