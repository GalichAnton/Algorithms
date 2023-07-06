class NodeStore {
  constructor() {
    this.nodes = {};
  }
  set(node, value) {
    node.__nodeStoreKey__ = Symbol();
    this.nodes[node.__nodeStoreKey__] = value;
  }

  get(node) {
    return this.nodes[node.__nodeStoreKey__];
  }
  
  has(node) {
    return !!this.nodes[node.__nodeStoreKey__];
  }
}