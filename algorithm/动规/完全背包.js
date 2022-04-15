
// 遍历背包在外， 装满背包的排列数
const combinationSum4 = (nums, target) => {

    let dp = Array(target + 1).fill(0);
    dp[0] = 1;
  
    for(let i = 0; i <= target; i++) {
        for(let j = 0; j < nums.length; j++) {
            if (i >= nums[j]) {
                dp[i] += dp[i - nums[j]];
            }
        }
    }
  
    return dp[target];
  };

//  遍历物品在外，装满背包的组合数
  const combinationSum4  = (nums, target) => {

    let dp = Array(target + 1).fill(0);
    let li = undefined
    let lj = undefined
    dp[0] = 1;
  
    for(let i = 0; i <= nums.length; i++) {
        for(let j = nums[i]; j < target j++) {
            if (i >= nums[j]) {
                dp[i] += dp[i - nums[j]];
            }
        }
    }
  
    return dp[target];
  };