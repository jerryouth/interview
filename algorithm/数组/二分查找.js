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



