class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  /*Function - Method*/
  newNode(value = undefined) {
    if (!value) return "Insert A Value";

    const node = new Node(value);
    if (!this.root) {
      this.root = node;
    }
    this.checkWeightNode(node);
  }

  /*Function - Method*/
  checkWeightNode(value) {
    return this.#auxCheckWeightNode(value);
  }

  /*Function - Method*/
  getRoot() {
    return this.root;
  }

  /*Function - PRIVATE Method*/
  #auxCheckWeightNode(value, root = this.root) {
    if (value.val < root.val && root.left == null) {
      root.left = value;
      return;
    } else if (value.val < root.val && root.left)
      return this.#auxCheckWeightNode(value, root.left);

    if (value.val > root.val && root.right == null) {
      root.right = value;
      return;
    } else if (value.val > root.val && root.right)
      return this.#auxCheckWeightNode(value, root.right);

    return ["null"];
  }

  /*Function - Method*/
  SearchNode(value) {
    return this.#auxSearchNode(value);
  }

  /*Function - PRIVATE Method*/
  #auxSearchNode(value, root = this.root) {
    if (value == root.val) return root;
    if (value < root.val && root.left)
      return this.#auxSearchNode(value, root.left);
    if (value > root.val && root.right)
      return this.#auxSearchNode(value, root.right);
    return `No se ha encontrado el valor: ${value}.`;
  }

  /*Function - Method*/

  travel(type = 1, fn) {
    if (type == 0) this.#inOrder(this.root, fn);
    if (type == 1) this.#preOrder(this.root, fn);
    if (type == -1) this.#postOrder(this.root, fn);
  }

  /*Function - PRIVATE Method*/
  #preOrder(root, fn) {
    fn(root);
    if (root.left != null) this.#preOrder(root.left, fn);
    if (root.right != null) this.#preOrder(root.right, fn);
  }

  /*Function - PRIVATE Method*/
  #postOrder(root, fn) {
    if (root.left != null) this.#postOrder(root.left, fn);
    if (root.right != null) this.#postOrder(root.right, fn);
    fn(root);
  }

  #inOrder(root, fn) {
    if (root.left != null) this.#inOrder(root.left, fn);
    fn(root);
    if (root.right != null) this.#inOrder(root.right, fn);
  }
}

const tree = new Tree();
const nodeValues = [45, 23, 65, 52, 96, 48, 2, 38, 7];

for (const nodeValue of nodeValues) tree.newNode(nodeValue);

console.log("");
console.log("IN-ORDER");
tree.travel(0, function (root) {
  console.log(
    `${"-".repeat(2)} ${root.val} ${root === tree.getRoot() ? "(ROOT)" : ""}`
  );
});

(() => {
  setTimeout(() => {
    console.log("");
    console.log("PRE-ORDEN");
    tree.travel(1, function (root) {
      console.log(
        `${"-".repeat(2)} ${root.val} ${
          root === tree.getRoot() ? "(ROOT)" : ""
        }`
      );
    });
    return clearTimeout();
  }, 500);
})();

(() => {
  setTimeout(() => {
    console.log("");
    console.log("POST-ORDEN");
    tree.travel(-1, function (root) {
      console.log(
        `${"-".repeat(2)} ${root.val} ${
          root === tree.getRoot() ? "(ROOT)" : ""
        }`
      );
    });
    console.log("");
    return clearTimeout();
  }, 1000);
})();
