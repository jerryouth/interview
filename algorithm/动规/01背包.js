// 背包重量 = size 6
// 物品重量[1,2,3,4] weight
// 物品value[1,2,3,4]

function testweightbagproblem(weight, value, size) {
  const dp = new Array(size+1).fill(0)
  for (let i = 0; i < weight.length; i++) {
    for (let j = 0; j<= size; j++) {
      if (j >= weight[i]) {
        dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i])
      } else {
        dp[j] = dp[j]
      }
      
    }
  }
  return dp[size]
}
// testweightbagproblem([1, 3, 4], [15, 20, 30], 4)


function two_dimension_testweightbagproblem (wight, value, size) {
    const len = wight.length, 
      dp = array.from({length: len}).map(
        () => array(size + 1).fill(0)
      );
    
    for(let i = 1; i <= len; i++) {
      for(let j = 0; j <= size; j++) {
        if(wight[i - 1] <= j) {
          dp[i][j] = math.max(
            dp[i - 1][j], 
            value[i] + dp[i - 1][j - wight[i - 1]]
          )
        } else {
          dp[i][j] = dp[i - 1][j];
        }
      }
    }
}
