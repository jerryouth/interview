
# 判断IP是否合法

力扣题目链接(opens new window)

给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。

有效的 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。

例如："0.1.2.201" 和 "192.168.1.1" 是 有效的 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效的 IP 地址。

示例 1：

输入：s = "25525511135"
输出：["255.255.11.135","255.255.111.35"]
示例 2：

输入：s = "0000"
输出：["0.0.0.0"]

isValid 判断是否是合理的ip数
dfs 组合数分割字符串， 当path 的length > 4时剪枝

``` js
var restoreIpAddresses = function(s) {
    const res = []
    const isvalid = function(str) {
        if (str[0] === '0' && str.length !== 1) return false
        let num = Number(str)
        if (num === NaN) return false
        if (0 <= num && num<= 255) return true
    }
    const dfs = function(start, path) {
        if (path.length > 4) return
        if (path.length ==4 && start === s.length) {
            res.push(path.slice().join("."))
            return 
        }
        for (let i = start; i < s.length; i++) {
            if (!isvalid(s$$.slice(start, i+1))) continue
            path.push(s.slice(start, i+1))
            dfs( i+ 1, path) 
            path.pop()
        }
    }
    dfs(0, [])
    return res
};
```