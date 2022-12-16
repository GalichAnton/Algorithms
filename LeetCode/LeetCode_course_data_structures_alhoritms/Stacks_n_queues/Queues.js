//Example: 933. Number of Recent Calls
// Implement the RecentCounter class.
// It should support ping(int t), which records a call at time t,
// and then returns an integer representing the number of calls that have happened in the range [t - 3000, t].
// Calls to ping will have increasing t.

var RecentCounter = function() {
  this.queue = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  while (this.queue.length && this.queue[0] < t - 3000) {
    this.queue.shift();
  }

  this.queue.push(t);
  return this.queue.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */