// https://leetcode.cn/problems/min-cost-climbing-stairs/
// 746. 使用最小花费爬楼梯

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const n = cost.length;
  let prev = 0, curr = 0;
  for (let i = 2; i <= n; i++) {
    let next = Math.min(curr + cost[i - 1], prev + cost[i - 2]);
    prev = curr;
    curr = next;
  }
  return curr;
};

console.log(minCostClimbingStairs([10, 15, 20]))