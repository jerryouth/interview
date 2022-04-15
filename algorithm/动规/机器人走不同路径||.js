// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

// 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？


var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length
    const dp = Array(m).fill().map(item => Array(n).fill(0))
    
    for (let i = 0; i < m && obstacleGrid[i][0] === 0; ++i) {
        dp[i][0] = 1
    }
    
    for (let i = 0; i < n && obstacleGrid[0][i] === 0; ++i) {
        dp[0][i] = 1
    }
    
    for (let i = 1; i < m; ++i) {
        for (let j = 1; j < n; ++j) {
            dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i - 1][j] + dp[i][j - 1]
        }
    }
        
    return dp[m - 1][n - 1]
};



var canPartition = function(nums) {
    let sum = nums.reduce((a, b) => a + b)
    let half = sum / 2
    count = 0
    // let result = []
    const help = (nums, startIndex) => {
        if (count == half) return true
        for (let i=startIndex; i < nums.length; i++) {
            count += nums[i]
            help(nums, i+1)
            count -= nums[i]
        }
        return false
    }
    return help(nums, 0)
}

canPartition([1,5,11,5])