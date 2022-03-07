xss 跨站脚本攻击

xss
浏览器想度武器请求的时候呗注入脚本攻击

反射型（非持久型）
存储型（持久性）
基于DOM

防范手段：
将特殊字符，以及API进行转义
1.输入过滤
2.输出过滤
3.加httponly，请求头


// 反射型，发出请求时，xss 代码出现在url 中，作为输入提交到服务器端，服务器端解析后响应，
// xss代码随响应内容一起传回浏览器，最后浏览器解析执行xss代码，这个过程像是一次反色，所以叫反射型xss
// 当浏览器请求 http://xxx/search?keyword="><script>alert('XSS');</script> 时，服务端会解析出请求参数 keyword，得到 "><script>alert('XSS');</script>，拼接到 HTML 中返回给浏览器。形成了如下的 HTML：


escapeHTML
// 输入过滤
