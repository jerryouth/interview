
// 给定一个字符串，逐个翻转字符串中的每个单词。

// 示例 1：
// 输入: "the sky is blue"
// 输出: "blue is sky the"

// 示例 2：
// 输入: "  hello world!  "
// 输出: "world! hello"
// 解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。

// 示例 3：
// 输入: "a good   example"
// 输出: "example good a"
// 解释: 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
// #


var reverseWords = function(s) {
    let index = 0, size = s.length -1
    let res = '', res_arr = []
    while(index <= size) {
        if (s[index] !== ' ') {
            res += s[index]
            index++
        }
        else {
            if (res) res_arr.unshift(res)
            res = ''
            index++
        }
    }
    if (res) res_arr.unshift(res)
    return res_arr.join(" ")
};



var reverseWords = function(s) {
    let index = 0; 
    const s_arr = [...s]
    let tmp = ""
    const result = []
    while(index < s.length) {
        if(s_arr[index] !== " ") {
            tmp += s_arr[index]
        }
        else {
            if (tmp) {
                result.unshift(tmp)
                tmp = ''
            }
        }
        index++
    }
    if (tmp) result.unshift(tmp)
    return result.join(" ")
};



