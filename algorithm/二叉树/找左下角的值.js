// 给定一个二叉树，在树的最后一行找到最左边的值


var findBottomLeftValue = function(root) {
    let maxPath = 0, resNode = null
    const dfsTree = function(node, curPath) {
         if (node.left === null && node.right === null) {
             if (curPath> maxPath) {
                maxPath = curPath
                resNode = node.val
             }
         }
         node.left && dfsTree(node.left, curPath+1)
         node.right && dfsTree(node.right, curPath+1)
    }
    dfsTree(root, 1)
    return resNode
};