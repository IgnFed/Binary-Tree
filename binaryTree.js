class Node{
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Tree{
  constructor(){
    this.root = null;
  }

  /*Function - Method*/
  nuevoNodo(value = undefined){
    if(!value) return "Insert A Value";

    const node = new Node(value);
    if(!this.root) {
      this.root = node;
      return this.root
    };
    return this.comprobarPesoNodo(node)
  };

  /*Function - Method*/
  comprobarPesoNodo(value){
   return this.#auxComprobarPesoNodo(value)
  }

  /*Function - PRIVATE Method*/
  #auxComprobarPesoNodo(value, root = this.root, level=1){
      if(value.val < root.val && root.left == null ){
        root.left = value
        return `${'*'.repeat(level)} ${value.val} --- left of ${root.val}`;
      }else if(value.val < root.val && root.left) return this.#auxComprobarPesoNodo(value, root.left, level+1);

      if(value.val > root.val && root.right == null ){
        root.right = value
        return `${'*'.repeat(level)} ${value.val} --- right of ${root.val}`;
      }else if(value.val > root.val && root.right) return this.#auxComprobarPesoNodo(value, root.right, level+1);

      return ["null"];
  }

  /*Function - Method*/
  buscarNodo(value){
    return this.#auxBuscarNodo(value);
  }

  /*Function - PRIVATE Method*/
  #auxBuscarNodo(value, root=this.root){
      if(value == root.val) return root;
      if(value < root.val && root.left) return this.#auxBuscarNodo(value, root.left);
      if(value > root.val  && root.right) return this.#auxBuscarNodo(value, root.right);
      return `No se ha encontrado el valor: ${value}.` ;
  }


  /*Function - Method*/

  recorrer(type = 1){
    if(type == -1) return this.#postOrden()
    if(type == 1) return this.#preOrden()
  }

  /*Function - PRIVATE Method*/
  #preOrden(root = this.root, level=1 ){
    console.log(`${'*'.repeat(level)} ${root.val}`)
    if(root.left != null) this.#preOrden(root.left, level+1);
    if(root.right != null) this.#preOrden(root.right, level+1);
  }

  /*Function - PRIVATE Method*/
  #postOrden(root = this.root, level=1 ){
    console.log(`${'*'.repeat(level)} ${root.val}`)
     if(root.right != null) this.#postOrden(root.right, level+1 )
     if(root.left != null) this.#postOrden(root.left, level+1)
  }

}

const tree = new Tree();
tree.nuevoNodo(23);
tree.nuevoNodo(12);
tree.nuevoNodo(42);
tree.nuevoNodo(47);
tree.nuevoNodo(10);
tree.nuevoNodo(-12);

"PRE-ORDEN"
 tree.recorrer(1)

"POST-ORDEN"
tree.recorrer(-1)
