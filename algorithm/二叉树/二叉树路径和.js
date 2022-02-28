// 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。

// 说明: 叶子节点是指没有子节点的节点。

var hasPathSum = function(root, targetSum) {
    const help = function(root, count) {
    if (!root) return false
    count += root.val
    if (root.left == null && root.right == null) {
        if (count == targetSum) {
            return true
        }
    } 
    return help(root.left, count) || help(root.right, count)
}
    return help(root, 0)
};
