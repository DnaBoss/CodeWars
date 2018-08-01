/**
 * Given a node object representing a binary tree:

Node:
  value: <int>,
  left: <Node> or null,
  right: <Node> or null
Node:
  value: <int>,
  left: <Node> or null,
  right: <Node> or null
struct node
{
  int value;
  node* left;
  node* right;
}
public class Node
{  
    public int Value;  
    public Node Left;  
    public Node Right;

    public Node(int value, Node left = null, Node right = null)
    {
      Value = value;
      Left = left;
      Right = right;
    }
}
 return the sum of all values in the tree, including the root

題目如上，給一個 結構NODE ，node 組成的樹
計算歷遍整個數，加總 value 即完成
沒有邊界判斷，value 也保證是數int
是等級6的題目，有點簡單, 不知道要說明什麼，單純遞迴 計算左右節點的值，然後加總
 */


function sumTheTreeValues(root) {
    return root ? root.value + sumTheTreeValues(root.right) + sumTheTreeValues(root.left) : 0;
 }