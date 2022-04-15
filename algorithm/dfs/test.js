// var combine = function(n, k) {
//     const nums = new Array(n).fill(0).map((v, index) => index + 1)
//     const result = []
//     const path = []
//     const dfs = function(startIndex, path) {
//         if (path.length === k) {
//             result.push(path.slice())
//             return
//         }
//         for (let i = startIndex; i < nums.length; i++) {
//             path.push(nums[i])
//             dfs(i + 1, path)
//             path.pop()
//         }
//     }
//     dfs(0, path)
//     return result
// };


// combine(4, 2)
var restoreIpAddresses = function(s) {
    const res = []
    const isvalid = function(str) {
        if (str[0] === '0' && str.length !== 1) return false
        let num = Number(str)
        if (num === NaN) return false
        if (0 <= num && num<= 255) return true
    }
    const dfs = function(start, path) {
        if (path.length == 2 && start !== s.length) return
        if (path.length ==2 && start === s.length) {
            res.push(path.slice().join("."))
            return 
        }
        for (let i = start; i < s.length; i++) {
            if (!isvalid(s.slice(start, i+1))) continue
            path.push(s.slice(start, i+1))
            dfs( i+ 1, path) 
            path.pop()
        }
    }
    dfs(0, [])
    return res
};

// restoreIpAddresses("11534")



// var findSubsequences = function(nums) {
//     let res = []
//     let path = []
//     function backtracing(start) {
//         if(path.length > 1) {
//             res.push(path.slice())
//         }
//         let uset = []
//         for(let i = start; i < nums.length; i++) {
//             if((path.length > 0 && nums[i] < path[path.length - 1]) || uset[nums[i] + 100]) {
//                 continue
//             }
//             uset[nums[i] + 100] = true
//             path.push(nums[i])
//             backtracing(i + 1)
//             path.pop()
//         }
//     }
//     backtracing(0)
//     return res
// };


var findSubsequences = function(nums) {
    const res = []
    const dfs = function(start, path) {
        if (path.length >=2) res.push(path.slice())
        // let used = {}
        for (let i = start; i < nums.length; i++){
            if (nums[i] >= path[path.length - 1] || path.length == 0) {
                // if (used[nums[i]])  continue
                // used[nums[i]] = true
                path.push(nums[i])
                dfs(i + 1, path)
                path.pop()
            }
        }
    }
    dfs(0, [])
    return res
}

// findSubsequences([4,7,6,7])



var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)
    let count = 0
    // cookie
    for (let j = s.length - 1; j >= 0; j--) {
        // people
        for (let i = g.length - 1; i >= 0; i--) {
            if (g[i] <= s[j]) {
                s.splice(j, 1)
                g.splice(i, 1)
                count++
            }
        }
    }
    return  count
};


// findContentChildren([1,2,3], [3])



var dailyTemperatures = function(temperatures) {
    let n = temperatures.length;
    let res = new Array(n).fill(0);
    let stack = [];  // 递减栈：用于存储元素右面第一个比他大的元素下标
    stack.push(0);
    for (let i = 1; i < n; i++) {
        // 栈顶元素
        let top = stack[stack.length - 1];
        if (temperatures[i] < temperatures[top]) {
            stack.push(i);
        } else if (temperatures[i] === temperatures[top]) {
            stack.push(i);
        } else {
            while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                let top = stack.pop();
                res[top] = i - top;
            }
            stack.push(i);
        }
    }
    return res;
};


// dailyTemperatures([73,74,75,71,69,72,76,73])



var nextGreaterElement = function(nums1, nums2) {
    const res = []
    for (let i = 0; i < nums1.length; i++) {
        for (let j = nums2.indexOf(nums1[i]) + 1; j <= nums2.length; j++) {
            if (j == nums2.length) res.push(-1)
            if (nums2[j] > nums1[i]) {res.push(nums2[j]); break}
        }
    }
    return res
};


// nextGreaterElement([4,1,2], [1,3,4,2])



var nextGreaterElements = function(nums) {
    const stack = [0]
    let res = new Array(nums.length).fill(-1)
    for (let i = 1; i < nums.length; i++) {
        while(stack.length && nums[i] > nums[stack[stack.length - 1]]) {
            let top = stack.pop()
            res[top] = nums[i]
        }
        stack.push(i)
    }
    const stack_2 = [nums.length - 1]
    for (let i = nums.length - 2; i >=0; i--) {
        while(stack_2.length && nums[i] > nums[stack_2[stack_2.length - 1]]) {
            let top = stack_2.pop()
            if (res[top] == -1) {
                res[top] = nums[i]
            }
        }
    }
    return res
    
};

nextGreaterElements([5,4,3,2,1])