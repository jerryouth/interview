// if (startIndex > i && nums[i] === nums[i - 1]) continue

/* 给定一个可能包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

说明：解集不能包含重复的子集。

示例:

输入: [1,2,2]
输出: [ [2], [1], [1,2,2], [2,2], [1,2], [] ]
# */


同层遍历时不可出现重复元素！！！！！！！

i > startIndex 是因为防止同枝相同，这种情况是不用剪枝的

var subsetsWithDup = function(nums) {
    let res = []
    let path = []
    nums.sort((a, b) => a - b)
    const dfs = function(startIndex, path) {
        res.push([...path])
        for (let i = startIndex; i < nums.length; i++) {
            if (i > startIndex && nums[i] === nums[i - 1]) continue
            path.push(nums[i])
            dfs(i + 1, path)
            path.pop()
        }
    }
    dfs(0, path)
    return res
}



