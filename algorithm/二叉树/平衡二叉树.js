// 给定一个二叉树，判断它是否是高度平衡的二叉树。

// 本题中，一棵高度平衡二叉树定义为：一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。

var isBalanced = function(root) {
    //还是用递归三部曲 + 后序遍历 左右中 当前左子树右子树高度相差大于1就返回-1
    // 1. 确定递归函数参数以及返回值
    const getDepth = function(node) {
        // 2. 确定递归函数终止条件
        if(node === null) return 0;
        // 3. 确定单层递归逻辑
        let leftDepth = getDepth(node.left); //左子树高度
        let rightDepth = getDepth(node.right); //右子树高度
        if(leftDepth === -1) return -1;
        if(rightDepth === -1) return -1;
        if(Math.abs(leftDepth - rightDepth) > 1) {
            return -1;
        } else {
            return 1 + Math.max(leftDepth, rightDepth);
        }
    }
    return !(getDepth(root) === -1);
};