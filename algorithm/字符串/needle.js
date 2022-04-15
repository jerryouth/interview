var strStr = function(haystack, needle) {
    // for(let i=0; i < haystack.length; i++) {
    //     if (haystack[i] == needle[0]) {
    //         for (let j = 1; j < needle.length; j++) {
    //             if (needle[j] !== haystack[i+j]) break
    //             if (j == needle.length - 1) return i 
    //         }
    //     }
    // }
    // return -1
    // return haystack.indexOf(needle)
    if (!needle) return 0
    let index = 0
    while(index < haystack.length) {
        if (haystack.substring(index, index+ needle.length) == needle) return index
        index ++
    }
    return -1
};