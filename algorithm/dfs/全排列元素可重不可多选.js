// // 新添加的剪枝逻辑，固定相同的元素在排列中的相对位置
// if (i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) {
//     // 如果前面的相邻相等元素没有用过，则跳过
//     continue;
// }


// i > 0 保证不是同一层 ; nums[i] == nums[i - 1] 重复前提； 
// ！[used[i - 1]] 前面相同的元素已经被选择， （used[i-1] = false）时 代表重复，应该跳过
// used[i-1] = false 时  ,前面相同的元素没有被选择，保证不了顺序稳定。所以跳过



/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
    const res = []
    const path = []
    const used = []
    nums.sort((a, b) => a - b)
    const dfs = function(path) {
        if (path.length == nums.length) {
            res.push([...path])
        }
        for (let i=0; i < nums.length; i++) {
            if (i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) continue
            if (!used[i]) {
                path.push(nums[i])
                used[i] = true
                dfs(path)
                path.pop()
                used[i] = false
            }
        }
    }
    dfs(path)
    return res
};