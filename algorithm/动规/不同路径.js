/* 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

问总共有多少条不同的路径？ */
var uniquePaths = function(m, n) {
    let dp = new Array(m).fill(0).map((value) => new Array(n).fill(0))
    dp[0] = dp[0].map(v => 1)
    for (let x=0; x < m; x++) {
        dp[x][0] = 1
    }
    dp[0][0] = 1
    for (let i=1; i <m; i++) {
        for (let j=1; j<n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1] 
        }
    }
    return dp[m - 1][n - 1]
};
