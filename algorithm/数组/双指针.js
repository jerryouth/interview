var reverseWords = function(s) {
    let index = 0, size = s.length -1
    let res = '', res_arr = []
    let flag = true //flag代表是否处于 单词区间
    while(index <= size) {
        if (s[index] !== ' ') {
            res += s[index]
            index++
            // flag = true
        }
        else {
            if (res) res_arr.unshift(res)
            res = ''
            index++
            // flag = false
        }
    }
    if (res) res_arr.unshift(res)
    return res_arr.join(" ")
};

reverseWords('the sky is blue')
