// var binaryTreePaths = function(root) {
    let res = []
    const help = function(root, path) {
    if (!root) return null
    if (!root.left && !root.right) {
        path = path + '->' + root.val
        path = path.substring(path.indexOf('>')+1)
        res.push(path)
    }
    path = path + '->' + root.val
    help(root.left, path)
    help(root.right, path)
}
    help(root, root.val)
    return res
};


var binaryTreePaths = function(root) {
    let res = []
    const help = function(root, path) {
    if (!root) return null
    if (!root.left && !root.right) {
        path += root.val
        res.push(path)
        return 
    }
    path += root.val + '->'
    help(root.left, path)
    help(root.right, path)
}
    help(root, '')
    return res
};