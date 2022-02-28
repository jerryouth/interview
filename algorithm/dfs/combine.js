// 输入：n = 4, k = 2
// 输出：
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]


let result = []
let path = []
var combine = function(n, k) {
    result = []
    combineHelper(n, k, 1)
    return result
};
const combineHelper = (n, k, startIndex) => {
    if (path.length === k) {
        result.push([...path])
        return
    }
    for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
        path.push(i)
        combineHelper(n, k, i+ 1)
        path.pop()
    }
}



combine(4,3)