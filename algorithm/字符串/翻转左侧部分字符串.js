// ; 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。

// ; 示例 1：
// ; 输入: s = "abcdefg", k = 2
// ; 输出: "cdefgab"

// ; 示例 2：
// ; 输入: s = "lrloseumgh", k = 6
// ; 输出: "umghlrlose"

// ; 限制：
// ; 1 <= k < s.length <= 10000

// ; #


// var reverseLeftWords = function(s, n) {
//     let arr = []
//     remain_arr = s.substring(n, s.length)
//     let k = n - 1
//     while(k >= 0) {
//         arr.push(s[k])
//         k--
//     }
//     for (let i = 0; i<arr.length; i++) {
//         remain_arr += arr[i]
//     }
//     return remain_arr
// };



// var reverseLeftWords = function(s, n) {
//     let s_arr = [...s].concat(new Array(n).fill(" "))
//     let left = 0, right = s_arr.length - 1, count = 0, tmp = ''
//     while(count <= n) {
//         tmp = s_arr[left]
//         s_arr[left] = s_arr[right]
//         s_arr[right] = tmp
//         left++
//         right--
//         count++
//     }
//     return s_arr.slice(n).join("")

// }

var reverseLeftWords = function(s, n) {
    let s_arr = [...s].concat(new Array(n).fill(" "))
    let left = 0, right = left + s_arr.length - n, count = 0, tmp = ''
    while(count < n) {
        tmp = s_arr[left]
        s_arr[left] = s_arr[right]
        s_arr[right] = tmp
        left++
        right++
        count++
    }
    return s_arr.slice(n).join("")

}
reverseLeftWords('abcdefg', 2)
