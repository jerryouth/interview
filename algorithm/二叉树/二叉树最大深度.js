
// 给定一个二叉树，找出其最大深度。

// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

// 说明: 叶子节点是指没有子节点的节点。

// 示例： 给定二叉树 [3,9,20,null,null,15,7]，


const help = function(root) {
    if (!root) return 0
    return 1 + Math.max(help(root.left), help(root.right))
}

var maxDepth = function(root) {
    return help(root)
};