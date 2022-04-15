/* 
给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

示例:
输入: n = 4, k = 2
输出:
[
[2,4],
[3,4],
[2,3],
[1,2],
[1,3],
[1,4],
]
 */




var combine = function(n, k) {
    const nums = new Array(n).fill(0).map((v, index) => index + 1)
    const result = []
    const path = []
    const dfs = function(startIndex, path) {
        if (path.length === k) {
                result.push(path.slice())
                return
            }
        for (let i = startIndex; i < nums.length; i++) {
            path.push(nums[i])
            dfs(i + 1, path)
            path.pop()
        }
    }
    dfs(0, path)
    return result
};