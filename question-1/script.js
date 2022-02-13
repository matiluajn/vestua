/**
 * On this module you should write your answer to question #1.
 * This file would be executed with the following command (N=100):
 * $ node scritp.js 100
 */

 function climbStairs(n) {
    if (n < 3) return n;
    let first = 1;
    let second = 2;
    for (let i = 2; i < n; i++) {
      const current = first + second;
      first = second;
      second = current;
    }
  
    return Math.round(second);
  }

const args = process.argv.slice(-1);
console.log(`Running question #1 with args ${args}`)
