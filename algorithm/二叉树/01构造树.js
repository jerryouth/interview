function createBinaryTree(arr){
    var p = new TreeNode(arr[0]);
    var k = 0;
    var len = arr.length;
    var buildTree = function(node, i){
       if(2*i+1<len && arr[2*i+1]!==null){
            node.left = new TreeNode(arr[2*i+1]);
            node.left && buildTree(node.left, 2*i+1)
        }
        if(2*i+2<len && arr[2*i+2]!==null){
            node.right = new TreeNode(arr[2*i+2]);
            node.right && buildTree(node.right, 2*i+2);
        }
    };
    buildTree(p, 0);
    return p;
}
function TreeNode(val){
    this.val = val;
    this.left = this.right = null;
}


// var arr = [5,4,8,11,null,13,4,7,2,null,null,null,1]
var arr = [236,104,701,null,227,null,911]
var arr1 = [1,3,2,5]
var arr2 = [2,1,3,null,4,null,7]
var tree = createBinaryTree(arr);
let root1 = createBinaryTree(arr1)
let root2 = createBinaryTree(arr2)

// var searchBST = function(root, val) {
//     if (!root) return null 
//     if (root.val == val) return root
//     let result =  searchBST(root.left) || searchBST(root.right)
//     return result ? result : null
// };
// var getMinimumDifference = function(root) {
//     let minNum = Infinity
//     const help = function(root) {
//         if (!root) return null
//         if (root.left) minNum = Math.min(Math.abs(root.val - root.left.val), minNum)
//         if (root.right) minNum = Math.min(Math.abs(root.val - root.right.val), minNum)
//         help(root.left)
//         help(root.right)
//     }
//     help(root)
//     return  minNum
// };
// let a = getMinimumDifference(tree)




// let a = searchBST(tree, 2)
// var mergeTrees = function(root1, root2) {
//     if (!root1 && !root2) return null
//     let root
//     if (root1 && !root2) {
//         root = new TreeNode(root1.val)
//     }
//     if (!root1 && root2) {
//         root = new TreeNode(root2.val)
//     }
//     if (root1 && root2) {
//         root = new TreeNode(root2.val + root1.val)
//     }
//     root.left = mergeTrees(root1.left, root2.left)
//     root.right = mergeTrees(root1.right, root2.right)
//     return root
// };

// var hasPathSum = function(root, targetSum) {
//     const help = function(root, count) {
//     count += root.val
//     if (!root) return false
//     if (root.left == null && root.right == null) {
//         if (count == targetSum) {
//             return true
//         }
//     }
//     let s  = root.left && help(root.left,count)
//     let n = root.right && help(root.right, count)
//     return Bool(s || n)
// }
//     return help(root, 0)
// };
// let b = hasPathSum(tree, 5)





let result = []
let path = []
var combine = function(n, k) {
    combineHelper(n, k, 1)
    return result
};
const combineHelper = (n, k, startIndex) => {
    
    if (path.length == k)  result.push(path.slice())
    for (let i =startIndex; i <= n; i++) {
        path.push(i)
        combineHelper(n, k, i + 1)
        path.pop()  
    }

}
combine(1, 1)