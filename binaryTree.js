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


// Array.prototype.get = function(index){
//   return this[index < 0 ? this.length + index: index];
// }

// class BinaryTreeNode{

//   constructor(value){
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BinaryTree{

//   constructor(){
//     this.root = null;
//   }

//   insert(value, path, where){
//     let node = new BinaryTreeNode(value);
//     if(!path) this.root = node;
//     else{
//       let foundNode = this.searchNodeWithPath(path);
//       console.log(foundNode )
//       foundNode[where] = node;
//       return foundNode
//     }
//       return node;
//   }

//   searchNodeWithPath(path){
//     const paths = path.split("/");
//     let actualNode = this.root;
//     for(let  i = 0; i < paths.length-1; i++){
//       console.log(actualNode)
//       actualNode = this.foundChild(actualNode, paths[i+1]);
//     }
//     if(actualNode.value === paths.get(-1)) return actualNode;
//   }

//   foundChild(actualNode, valueToSearch ){
//     console.log(actualNode)
//     if(actualNode.value?.left == valueToSearch) return actualNode.left;
//     if(actualNode.value?.right == valueToSearch) return actualNode.right;
//     return actualNode;
//   }
// }


// const fileSystem = new BinaryTree();

// fileSystem.insert("Equipo")
// fileSystem.insert("Gneerate", "Equipo", "left");
// fileSystem.insert("Gneratopms", "Equipo", "right");




















// // let obj = {}
// // let obj2;
// // const n = `22,19,16,13,18,15,20,14,15,16,15,16,20,13,15,18,15,13,18,15`.split(',')
// // let longi = n.length;

// // let xMax = 0;
// // let xMin = Infinity;

// // for(let x of n){
// //   if(x >= xMax ) xMax = x;
// //   if(x <= xMin ) xMin = x;

// //   if(!obj[`${x}`]){
// //     obj[`${x}`] = 1;
// //   } else{
// //     obj[`${x}`] +=1
// //   }
// // }
// // let Range = xMax-xMin
// // let intervalOperation = 1 + 3.322*Math.log10(20)
// // let K_Intervals = Math.ceil(intervalOperation) % 2 == 0 ? Math.round(intervalOperation) : Math.ceil(intervalOperation)
// // let Amplitude = Range / K_Intervals;


// // "Object: ";obj
// // "Longitud: "+longi
// // "Max Value: "+xMax
// // "Min Value: "+xMin

// // "Range: " + Range
// // "K_Intervals: " + K_Intervals;
// // "Amplitude: " + Amplitude
