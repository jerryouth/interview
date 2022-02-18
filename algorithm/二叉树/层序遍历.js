var levelOrder = function(root) {
    let res = [], queue =[]
    queue.push(root)
    if (root === null) return res
    while (queue.length !== 0) {
        let length = queue.length
        let curLevel = []
        for (let i=0; i<length; i++) {
            let node = queue.shift()
            curLevel.push(node.val)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        res.push(curLevel)
    }
    return res
}


