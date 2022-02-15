// 适用情况：1、有序数组 2、不存在重复元素

// 左闭右闭

const binary_search = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        let middle = left + (Math.floor((right - left) / 2))
        if (nums[middle] > target) {
            right = middle - 1;
        } else if (nums[middle] < target) {
            left = middle + 1
        } else {
            return middle
        }
    }
    return - 1
}


let nums= [1,2,3,4,7,9,10], target = 2

binary_search(nums, target)





var minSubArrayLen = function(target, nums) {
    // let result = 0
    // for (let i = 0; i< nums.length; i++) {
    //     if (nums[i] >= target) return 1
    //     let sum = nums[i]
    //     for (let j = i+1; j < nums.length; j++) {
    //         sum += nums[j]
    //         if (sum >= target) {
    //             result = result ? Math.min(result, j-i+1): j-i+1
    //             break
    //         }
    //     }
    // }
    // return result
    let result = Infinity
    let sum = 0
    let i = 0
    let sublength = 0
    for (let j = 0; j < nums.length; j++) {
        sum += nums[j];
        while (sum >= target) {
            sublength =(j - i + 1)
            result = result < sublength ? result : sublength
            sum -= nums[i++]
        }
    }
    return result === Infinity ? 0 : result
};


minSubArrayLen(7, [2,3,1,2,4,3])