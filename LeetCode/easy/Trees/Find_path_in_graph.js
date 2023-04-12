/*
Path https://leetcode.com/problems/find-if-path-exists-in-graph/description/
There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.

You want to determine if there is a valid path that exists from vertex source to vertex destination.

Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise.
Input: n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5
Output: false
Explanation: There is no path from vertex 0 to vertex 5.
*/

var validPath = function(n, edges, source, destination) {
  let map = {};

  for (let [s, e] of edges) {
    map[s] ? map[s].push(e) : (map[s] = [e]);
    map[e] ? map[e].push(s) : (map[e] = [s]);
  }

  let q = [source];
  let seen = {};
  while (q.length) {
    let vertex = q.shift();

    if (vertex === destination) return true;

    map[vertex].forEach((neighbor) => {
      if (!seen[neighbor]) q.push(neighbor);
      seen[neighbor] = true;
    });
  }

  return false;
};

console.log(validPath(6, [[0, 1], [0, 2], [3, 5], [5, 4], [4, 3]], 0, 5));