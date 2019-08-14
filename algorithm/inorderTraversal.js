/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root,res) {
    let result=res||[];
    if(root!=null){
        inorderTraversal(root.left,result);
        result.push(root.val);
        inorderTraversal(root.right,result);
    }
    return result;
};