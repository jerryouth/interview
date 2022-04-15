// 解开全排列是否已经被使用的限制


const arrange = function(nums) {
    const res = []
    const dfs = (path) => {
        if (path.length == nums.length) {res.push([...path]); return}
        for (let i = 0; i < nums.length; i++) {
            path.push(nums[i])
            dfs(path)
            path.pop()
        }
    }
    dfs([])
    return res
}


arrange([1,2])