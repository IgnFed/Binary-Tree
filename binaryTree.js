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
    if (!value) return 'Insert A Value';

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
  #auxCheckWeightNode(value, root = this.root, level = 1) {
    if (value.val < root.val && root.left == null) {
      root.left = value;
      return `${'*'.repeat(level)} ${value.val} --- left of ${root.val}`;
    } else if (value.val < root.val && root.left)
      return this.#auxCheckWeightNode(value, root.left, level + 1);

    if (value.val > root.val && root.right == null) {
      root.right = value;
      return `${'*'.repeat(level)} ${value.val} --- right of ${root.val}`;
    } else if (value.val > root.val && root.right)
      return this.#auxCheckWeightNode(value, root.right, level + 1);

    return ['null'];
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
    if (type == 0) this.#inOrder(this.root, 1, '', fn);
    if (type == 1) this.#preOrder(this.root, 1, '', fn);
    if (type == -1) this.#postOrder(this.root, 1, '', fn);
  }

  /*Function - PRIVATE Method*/
  #preOrder(root, level, type, fn) {
    fn(root, level, type);
    if (root.left != null) this.#preOrder(root.left, level + 1, '<', fn);
    if (root.right != null) this.#preOrder(root.right, level + 1, '>', fn);
  }

  /*Function - PRIVATE Method*/
  #postOrder(root, level, type, fn) {
    if (root.left != null) this.#postOrder(root.left, level + 1, '<', fn);
    if (root.right != null) this.#postOrder(root.right, level + 1, '>', fn);
    fn(root, level, type);
  }

  #inOrder(root, level, type, fn) {
    if (root.left != null) this.#inOrder(root.left, level + 1, '<', fn);
    fn(root, level, type);
    if (root.right != null) this.#inOrder(root.right, level + 1, '>', fn);
  }
}

const tree = new Tree();
tree.newNode(45);
tree.newNode(23);
tree.newNode(65);
tree.newNode(52);
tree.newNode(96);
tree.newNode(48);
tree.newNode(2);
tree.newNode(38);
tree.newNode(7);

('IN-ORDER');
tree.travel(0, function (root, level, type) {
  console.log(`${'--'.repeat(level)}${type} ${root.val}`);
});

(() => {
  setTimeout(() => {
    console.log('PRE-ORDEN');
    tree.travel(1, function (root, level) {
      console.log(`${'--'.repeat(level)} ${root.val}`);
    });
    return clearTimeout();
  }, 500);
})();

(() => {
  setTimeout(() => {
    console.log('POST-ORDEN');
    tree.travel(-1, function (root, level) {
      console.log(`${'--'.repeat(level)} ${root.val}`);
    });
    return clearTimeout();
  }, 1000);
})();
