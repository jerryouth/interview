// let result = []
// let path = []
var combinationSum3 = function(k, n) {
    let result = []
    let path = []
    const dfs = function(k, n, startindex) {
        for (let i=startindex; i <= 9; i++) {
            if (path.length === k)
            {
                if (path.reduce((p, c) => p + c) == n) {
                    result.push(path.slice())
                }
                return
            }
            path.push(i)
            dfs(k, n, i + 1)
            path.pop()
        }
    }
    dfs(k,n, 1)
    return result
};


combinationSum3(3, 7)