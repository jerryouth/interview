/* 
输入：candidates = [2,3,6,7], target = 7
输出：[[2,2,3],[7]]
解释：
2 和 3 可以形成一组候选，2 + 2 + 3 = 7 。注意 2 可以使用多次。
7 也是一个候选， 7 = 7 。
仅有这两种组合。 */


// startIndex 每次不加1 从上层元素开始为首遍历

var combinationSum = function(candidates, target) {
    let res = []
    const nums = candidates
    const sum = (nums) => {
        if (!nums.length) return 0;
        return nums.reduce((a, b) => a + b)
        }
    const dfs = function(start, path) {
        if (sum(path) === target) {res.push([...path]); return}
        if (sum(path) > target) return
        for (let i = start; i< nums.length; i++) {
            path.push(nums[i])
            dfs(i, path)
            path.pop()
        }
    }
    dfs(0, [])
    return res
};