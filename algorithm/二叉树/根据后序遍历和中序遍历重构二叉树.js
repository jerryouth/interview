// 根据一棵树的中序遍历与后序遍历构造二叉树。

// 注意: 你可以假设树中没有重复的元素。

// 例如，给出

// 中序遍历 inorder = [9,3,15,20,7] 后序遍历 postorder = [9,15,7,20,3] 返回如下的二叉树：


var buildTree = function(inorder, postorder) {
    if (!postorder.length) return null
    const rootVal = postorder.pop() 
    let rootIndex = inorder.indexOf(rootVal)
    const root = new TreeNode(rootVal)
    root.left = buildTree(inorder.slice(0, rootIndex), postorder.slice(0, rootIndex))
    root.right = buildTree(inorder.slice(rootIndex + 1), postorder.slice(rootIndex))
    return root
};


