/*  In England the currency is made up of pound, £, and pence, p, and, 
there are eight coins in general circulation: 
1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p). 
It is possible to make £2 in the following way: 1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p 
How many different ways can £2 be made using any number of coins? */

function solution(target) {
    var coins = [1, 2, 5, 10, 20, 50, 100, 200];
    var table = new Array(target + 1);
    for (var i = 0; i <= target; i++) {
      table[i] = new Array(coins.length);
      table[i][0] = 1;
    }
  
    for (var i = 0; i <= target; i++) {
      for (var j = 1; j < coins.length; j++) {
        table[i][j] = table[i][j - 1];
        if (coins[j] <= i) table[i][j] += table[i - coins[j]][j];
      }
    }
    return table[i - 1][j - 1];
  }
  