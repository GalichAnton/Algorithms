var MinStack = function() {
  this.stack = []
  this.minStack = []
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.stack.push(val);
  const isMinEmpty = !this.minStack.length;
  const hasNewMin = val <= this.minStack[this.minStack.length - 1] ;
  const canAddMin = isMinEmpty || hasNewMin;
  if (canAddMin) this.minStack.push(val);

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  const top = this.stack.pop();

  const canPopMin = top === this.getMin();
  if (canPopMin) this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack.length
    ? this.stack[this.stack.length - 1]
    : null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1]
};