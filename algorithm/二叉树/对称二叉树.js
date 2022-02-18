// 给定一个二叉树，检查它是否是镜像对称的。

const check = function(left ,right) {
    if (!left && !right) return true
    if (!left || !right) return false
    return left.val === right.val && check(left.left, right.right) && check(left.right, right.left)
}

var isSymmetric = function(root) {
    return check(root, root)
};



