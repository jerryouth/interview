var fib = function(n) {
    let dp = [0, 1]
    for (let i = 2; i <= n; i++) {
        dp[n] = dp[n - 1] + dp[n - 2]
    }
    return dp[n]
};
fib(3)