/**
 * @param {number[]} nums
 * @return {number[][]}
 */


/*  给定一个 没有重复 数字的序列，返回其所有可能的全排列。

 示例:
 
 输入: [1,2,3]
 输出: [ [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1] ]
 # */

 

 var permute = function(nums) {
    const used = []
    const result = []
    const path = []
    const dfs  = function(path) {
        if (path.length === nums.length) {
            result.push(path.slice())
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue
            used[i] = true
            path.push(nums[i])
            dfs(path)
            path.pop()
            used[i] = false
        }
    }
    dfs(path)
    return result
}